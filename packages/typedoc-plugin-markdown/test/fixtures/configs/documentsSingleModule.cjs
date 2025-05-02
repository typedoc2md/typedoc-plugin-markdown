// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/documents/module-1.ts'],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/stub-documents-theme.mjs',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  hidePageHeader: true,
  projectDocuments: ['../PROJECT_DOC_1.md'],
  theme: 'stub-documents',
  readme: 'none',
  disableSources: true,
};

const opts1 = {};

const opts2 = {
  indexFormat: 'table',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/documentsSingleModule/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documentsSingleModule/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documentsSingleModule/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documentsSingleModule/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
