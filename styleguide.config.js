// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.stories.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    'src/components/index.ts',
  ],
  webpackConfig: {
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  outputStyle: 'compressed',
                },
              },
            },
          ],
        },
      ],
    },
  },
};
