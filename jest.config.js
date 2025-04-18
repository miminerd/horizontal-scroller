module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|mjs|js|html)$": [
      "jest-preset-angular",
      {
        tsconfig: "<rootDir>/tsconfig.spec.json",
        stringifyContentPathRegex: "\\.html$",
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(@angular|rxjs|tslib|@testing-library)/)'],
  moduleFileExtensions: ["ts", "html", "js", "json"],
};
