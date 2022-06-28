const path = require('path');
module.exports = {
  modulePaths: ['<rootDir>/dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  setupFiles: [path.join(__dirname, 'test/jest-helpers.ts')],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  maxWorkers: '50%',
  testTimeout: 30000,
};
