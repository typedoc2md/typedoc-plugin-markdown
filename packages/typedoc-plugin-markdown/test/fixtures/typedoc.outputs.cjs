// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  entryPoints: ['./src/outputs/index.ts'],
  plugin: ['typedoc-plugin-markdown'],
  outputs: [
    {
      name: 'html',
      path: './out/html/outputs',
    },
    {
      name: 'markdown',
      path: './out/md/outputs/kind',
      options: {
        router: 'kind',
      },
    },
    {
      name: 'markdown',
      path: './out/md/outputs/kind-dir',
      options: {
        router: 'kind-dir',
        includeHierarchySummary: true,
        entryFileName: 'index.md',
        modulesFileName: 'documentation.md',
        useHTMLAnchors: true,
        anchorPrefix: 'api',
        hidePageHeader: true,
        hideBreadcrumbs: true,
        disableSources: true,
      },
    },
  ],
};
