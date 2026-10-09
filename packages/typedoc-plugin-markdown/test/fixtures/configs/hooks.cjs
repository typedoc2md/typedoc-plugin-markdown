// @ts-check

const baseOptions = require('../typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  entryPoints: ['../src/documents/module-1.ts'],
  plugin: ['../../../dist/index.js', '../custom-plugins/hooks-plugin.mjs'],
  readme: '../PROJECT_DOC_1.md',
  projectDocuments: ['../docs/project/PROJECT_DOC_2.md'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/hooks/members/opts-1',
    },
  ],
};
