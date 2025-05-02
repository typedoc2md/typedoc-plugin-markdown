// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/packages/package-1'],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  entryPointStrategy: 'packages',
  name: 'package-example',
  includeVersion: true,
  disableSources: true,
  readme: '../src/packages/package-1/README.md',
};

const opts1 = {};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/package/members/opts-1',
      options: {
        ...opts1,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/package/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
  ],
};
