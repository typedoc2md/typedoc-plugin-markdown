// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/file-names/main.ts', '../src/file-names/other.ts'],
  plugin: ['../../../dist/index.js', '../custom-plugins/urls-plugin.mjs'],
  readme: '../PROJECT_DOC_1.md',
  projectDocuments: ['../docs/file-names/FAQ.md'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/file-names/members/opts-1',
      options: {
        router: 'member',
        entryModule: 'main',
      },
    },
    {
      name: 'markdown',
      path: '../out/md/file-names/members/opts-2',
      options: {
        router: 'kind',
        mergeReadme: true,
      },
    },
  ],
};
