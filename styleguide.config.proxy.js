/* eslint-disable @typescript-eslint/no-var-requires */
const { readdirSync, existsSync, mkdirSync, writeFileSync } = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

/**
 * Collect sections from src directory
 *
 * @param {http.IncomingMessage} _proxyRes the http response message
 * @param {Express.Request} req request object
 * @param {Express.Response} res response object
 */
function onProxyRes(_proxyRes, req, res) {
  const oldWrite = res.write;
  const oldEnd = res.end;
  const chunks = [];

  res.write = function (chunk, ...args) {
    chunks.push(chunk);
    return oldWrite.apply(res, [chunk, ...args]);
  };

  res.end = function (chunk, ...args) {
    if (chunk) {
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf8');

    // Apply response end.
    oldEnd.apply(res, [chunk, ...args]);

    // Check if path exist
    // If path exist and not overwrite, continue
    const reqPath = `public/api/kubernetes${req.path}`;
    if (existsSync(reqPath) && !(process.env.BRIDGE_PROXY_REWRITE === 'true')) {
      return;
    }

    // Create traget directory if missing.
    const reqDir = reqPath.substring(0, reqPath.lastIndexOf('/'));
    mkdirSync(reqDir, { recursive: true });

    // Record proxy body to file.
    writeFileSync(reqPath, body);
  };
}

/**
 * Collect sections from src directory
 *
 * @returns {Object[]} list of sections
 */
function getSections() {
  const componentDir = 'src/components';
  const sections = readdirSync(componentDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      name: dirent.name,
      components: `${path.join(componentDir, dirent.name)}/**/*.tsx`,
      content: `${path.join(componentDir, dirent.name)}/README.md`,
      sectionDepth: 1,
    }));

  return sections;
}

module.exports = {
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  styleguideDir: 'docs-build',
  ignore: [
    '**/__snapshots__/**',
    '**/__mocks__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    'src/components/index.ts',
  ],
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
      sectionDepth: 1,
    },
    ...getSections(),
  ],
  require: [
    path.resolve(__dirname, 'node_modules/@patternfly/patternfly/patternfly.css'),
    path.resolve(__dirname, 'node_modules/@patternfly/react-core/dist/styles/base.css'),
  ],
  title: 'KubeVirt UI',
  usageMode: 'expand',
  webpackConfig: require('./styleguide/webpack.config.js'),

  theme: './styleguide/theme.ts',
  styles: './styleguide/styles.ts',

  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguide/components/Logo'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer'),
    TypeRenderer: path.join(__dirname, 'styleguide/components/Type'),
  },
  template: {
    favicon: './favicon-32x32.png',
  },
  assetsDir: path.join(__dirname, 'public'),
  configureServer(app) {
    app.use(
      '/api/kubernetes',
      createProxyMiddleware({
        target: process.env.BRIDGE_CLUSTER_ENDPOINT,
        secure: false,
        changeOrigin: true,
        ws: false,
        headers: { Authorization: `Bearer ${process.env.BRIDGE_AUTH_BEARER_TOKEN}` },
        pathRewrite: {
          [`^/api/kubernetes`]: '',
        },
        onProxyRes,
      }),
    );
  },
};
