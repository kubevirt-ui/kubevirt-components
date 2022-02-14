#!/usr/bin/env node

const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { Command, Option } = require('commander');

// Parse user variables
const program = new Command();
program
  .addOption(new Option('-p, --port <number>', 'proxy server port number').default(9090).env('BRIDGE_PORT'))
  .addOption(new Option('-u, --host <host>', 'proxy server host name').default('0.0.0.0').env('BRIDGE_HOST'))
  .addOption(new Option('-e, --clusterEndpoint <endpoint>', 'url for k8s api').makeOptionMandatory(true).env('BRIDGE_CLUSTER_ENDPOINT'))
  .addOption(new Option('-s, --styleguideEndpoint <endpoint>', 'url for styleguide development server').makeOptionMandatory(true).env('BRIDGE_STYLEGUIDE_ENDPOINT'))
  .addOption(new Option('-t, --clusterThanos <thanos>', 'url for thanos/prometheus api').makeOptionMandatory(true).env('BRIDGE_CLUSTER_THANOS'))
  .addOption(new Option('-a, --authBearerToken <auth>', 'auth token for k8s api').makeOptionMandatory(true).env('BRIDGE_AUTH_BEARER_TOKEN'))

program.parse();
const options = program.opts();

// Printout options
console.log({...options, authBearerToken: 'hidden'})

// Create Express Server
const app = express();
app.disable("x-powered-by");

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res) => {
    res.json({app:'kubevirt ui bridge', k8s_server: '', metrics_server: ''});
});

// Proxy endpoints
app.use('/api/kubernetes', createProxyMiddleware({
    target: options.clusterEndpoint,
    secure: false,
    changeOrigin: true,
    ws: true,
    headers: {Authorization:`Bearer ${options.authBearerToken}`},
    pathRewrite: {
        [`^/api/kubernetes`]: '',
    },
}));

app.use('/api/prometheus', createProxyMiddleware({
    target: options.clusterThanos,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        [`^/api/prometheus`]: '',
    },
}));

app.use('/', createProxyMiddleware({
    target: options.styleguideEndpoint,
    secure: false,
    changeOrigin: true,
}));

// Start the Proxy
app.listen(options.port, options.host, () => {
    console.log();
    console.log(`Starting kubevirt ui bridge ${options.host}:${options.port}`);
    console.log(`On localhost                http://localhost:${options.port}`);
});
