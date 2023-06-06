export default {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleNameMapper": {
        "\\.(css|less|scss|sass)$": "<rootDir>/jest/__mocks__/style.js",
        "^@components(.*)$": "<rootDir>/src/web/components$1",
        "^@models(.*)$": "<rootDir>/src/models$1"
      },
    "setupFilesAfterEnv": [ "<rootDir>/jest/setup.js" ],
    testEnvironment: 'jsdom',
  }