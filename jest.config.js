module.exports = {
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
      },
    "setupTestFrameworkScriptFile": "<rootDir>/jest/setup.js" 
  }