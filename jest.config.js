module.exports = {
  modulePaths: ['<rootDir>/dist'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/dist/**/*js'],
  setupFiles: ['<rootDir>/test/setup.js'],
};
