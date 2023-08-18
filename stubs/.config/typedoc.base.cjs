const path = require('path');

module.exports = {
  entryPoints: [path.join(__dirname, '../src/*.ts')],
  tsconfig: path.join(__dirname, '../tsconfig.json'),
  media: '../media/',
  includeVersion: true,
  cleanOutputDir: true,
  githubPages: false,
  sort: ['kind', 'instance-first'],
  disableSources: false,
};
