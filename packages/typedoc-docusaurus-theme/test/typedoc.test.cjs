const path = require('path');
module.exports = {
  entryPoints: ['./stubs/*.ts'],
  tsconfig: './stubs/tsconfig.json',
  plugin: ['typedoc-plugin-markdown', 'typedoc-docusaurus-theme'],
  readme: 'none',
  disableSources: true,
  cleanOutputDir: true,
  hidePageHeader: true,
  hideBreadcrumbs: true,
  outputs: [
    {
      name: 'markdown',
      // equivalent to default out,
      path: path.join(__dirname, '../docs/api'),
    },
    {
      name: 'markdown',
      path: path.join(__dirname, '../docs/folder-1/sidebar-js'),
      options: {
        docsPath: 'docs/folder-1',
        numberPrefixParser: false,
        sidebar: {
          pretty: true,
          deprecatedItemClassName: 'custom-deprecated-class',
        },
      },
    },
    {
      name: 'markdown',
      path: path.join(__dirname, '../docs/folder-2/sub-folder/sidebar-ts'),
      options: {
        docsPath: 'docs/folder-2/subfolder',
        sidebar: { typescript: true },
      },
    },
  ],
};
