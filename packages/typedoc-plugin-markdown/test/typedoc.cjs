const path = require('path');
module.exports = {
  entryPoints: ['./stubs/default/*.ts'],
  tsconfig: 'tsconfig.json',
  githubPages: false,
  cleanOutputDir: true,
};
