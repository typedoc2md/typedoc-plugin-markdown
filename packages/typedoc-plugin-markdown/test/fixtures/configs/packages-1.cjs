// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/packages/*'],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  entryPointStrategy: 'packages',
  name: 'packages-example',
  disableSources: true,
  tableColumnSettings: {
    leftAlignHeaders: true,
  },
  projectDocuments: ['../PROJECT_DOC_1.md'],
};

const opts1 = {
  entryFileName: 'index.md',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/packages/members/opts-1',
      options: {
        ...opts1,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/packages/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
  ],
};
