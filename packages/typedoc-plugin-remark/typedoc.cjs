const path = require('path');

module.exports = {
  entryPoints: ['./stubs/index.ts'],
  tsconfig: './stubs/tsconfig.json',
  out: './out',
  plugin: ['typedoc-plugin-markdown', './dist'],
  remarkPlugins: ['remark-github', 'unified-prettier'],
  readme: 'none',
  parametersFormat: 'table',
  githubPages: false,
  disableSources: true,
  cleanOutputDir: true,
};
