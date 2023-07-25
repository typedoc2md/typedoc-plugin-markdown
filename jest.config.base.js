const path = require('path');
module.exports = {
  modulePaths: ['<rootDir>/dist'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  setupFiles: [path.join(__dirname, 'jest.helpers.ts')],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  maxWorkers: '1',
  testTimeout: 30000,
  updateSnapshot: false,
  detectOpenHandles: true,
  forceExit: true,
  workerIdleMemoryLimit: '512MB',
};
