import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/bridge/'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@patternfly|@kubevirt-ui|@openshift-console\\S*?)/.*)',
  ],
  moduleNameMapper: {
    '\\.(css|less|svg)$': '<rootDir>/__mocks__/dummy.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  testRegex: '.*\\.test\\.(ts|tsx|js|jsx)$',
};

export default config;
