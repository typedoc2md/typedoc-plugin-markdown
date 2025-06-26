// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/packages/*'],
  plugin: ['../../../dist/index.js', '../custom-plugins/navigation-plugin.mjs'],
  entryPointStrategy: 'packages',
  name: 'packages-example',
  disableSources: true,
  tableColumnSettings: {
    leftAlignHeaders: true,
  },

  includeVersion: true,
};

const opts2 = {
  excludeScopesInPaths: true,
  mergeReadme: true,

  indexFormat: 'table',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/packages/members/opts-2',
      options: {
        ...opts2,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/packages/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
