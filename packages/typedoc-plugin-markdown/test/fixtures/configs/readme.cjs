// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/readme/index.ts'],
  plugin: ['../../../dist/index.js', '../custom-plugins/navigation-plugin.mjs'],
  includeVersion: true,
  disableSources: true,
};

const opts1 = {
  entryFileName: 'index.md',

  mergeReadme: true,

  pageTitleTemplates: {
    index: 'My API - {version}',
  },
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/readme/members/opts-1',
      options: {
        ...opts1,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/readme/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
  ],
};
