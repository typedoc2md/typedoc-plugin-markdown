const path = require('path');

module.exports = {
  entryPoints: ['../src/*.ts'],
  tsconfig: '../tsconfig.json',
  media: '../media/',
  includeVersion: true,
  cleanOutputDir: true,
  githubPages: false,
  sort: ['kind', 'instance-first'],
  disableSources: false,
};
