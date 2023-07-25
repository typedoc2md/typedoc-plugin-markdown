const path = require('path');
module.exports = {
  modulePaths: ['<rootDir>/dist'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
  },
  verbose: true,
  setupFiles: [path.join(__dirname, 'jest.helpers.ts')],
  maxWorkers: '1',
  testTimeout: 30000,
  detectOpenHandles: true,
  forceExit: true,
  workerIdleMemoryLimit: '512MB',
};
