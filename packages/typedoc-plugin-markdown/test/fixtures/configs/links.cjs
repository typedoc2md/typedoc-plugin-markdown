// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/links/inherited.ts', '../src/links/extended.ts'],
  plugin: ['../../../dist/index.js'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  readme: 'none',
  useTsLinkResolution: false,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/links/modules/opts-1',
      options: {
        router: 'module',
      },
    },
  ],
};
