const path = require('path');

module.exports = {
  entryPoints: ['./stubs/index.ts'],
  tsconfig: './stubs/tsconfig.json',
  out: './out',
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-remark'],
  remarkPlugins: ['remark-github', 'unified-prettier'],
  readme: 'none',
  parametersFormat: 'table',
  githubPages: false,
  disableSources: true,
  cleanOutputDir: true,
  hideGenerator: true,
  hidePageHeader: true,
  hideBreadcrumbs: true,
};
