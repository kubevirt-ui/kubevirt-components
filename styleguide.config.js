/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  styleguideDir: 'docs-build',
  ignore: [
    '**/__tests__/**',
    '**/tests/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
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
    {
      name: 'Icons',
      components: 'src/components/icons/**/*.tsx',
      content: 'src/components/icons/README.md',
      sectionDepth: 1,
    },
    {
      name: 'Status',
      components: 'src/components/status/**/*.tsx',
      content: 'src/components/status/README.md',
      sectionDepth: 1,
    },
    {
      name: 'Shims',
      components: 'src/components/shims/**/*.tsx',
      content: 'src/components/shims/README.md',
      sectionDepth: 1,
    },
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
    favicon: './styleguide/favicon-32x32.png',
  },
};
