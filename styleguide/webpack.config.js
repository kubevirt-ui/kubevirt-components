/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const allKubevirtTypes = fs
  .readdirSync(path.resolve(__dirname, '../node_modules/@kubevirt-ui/kubevirt-api'))
  .map((filename) => filename.replace(/\.[^/.]+$/, ''));

module.exports = () => {
  return {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx|js)?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]',
            },
          },
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                outputPath: 'images',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      alias: {
        '@openshift-console/dynamic-plugin-sdk': '@dynamic-plugin-sdk-mocks',
      },
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        }),
      ],
      symlinks: false,
      cacheWithContext: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        KUBEVIRT_CONSTS: JSON.stringify({
          allTypes: allKubevirtTypes,
        }),
      }),
    ],
  };
};
