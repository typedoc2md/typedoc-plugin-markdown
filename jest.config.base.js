const path = require('path');
module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  verbose: true,
  testTimeout: 30000,
  detectOpenHandles: true,
  forceExit: true,
};
