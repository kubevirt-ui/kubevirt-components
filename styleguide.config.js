/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { readdirSync } = require('fs');

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
};
