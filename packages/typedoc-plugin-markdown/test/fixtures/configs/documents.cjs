// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/documents/module-1.ts', '../src/documents/module-2.ts'],
  plugin: [
    '../../../dist/index.js',
    '../custom-plugins/stub-documents-theme.mjs',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  hidePageHeader: true,
  theme: 'stub-documents',
  readme: 'none',
  disableSources: true,
  projectDocuments: [
    '../PROJECT_DOC_1.md',
    '../docs/project/PROJECT_DOC_2.md',
    '../docs/project/PROJECT_DOC_3.md',
  ],
};

const opts1 = {};

const opts2 = {
  indexFormat: 'htmlTable',
  flattenOutputFiles: true,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/documents/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documents/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documents/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/documents/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
