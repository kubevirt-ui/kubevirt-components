import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "__coverage__",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(@patternfly|lodash-es|@console|@novnc|@spice-project|@popperjs|i18next\\S*?)/.*)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
  testRegex: ".*\\.spec\\.(ts|tsx|js|jsx)$",
  testURL: "http://localhost",
  testEnvironment: "jsdom"
};

export default config;
