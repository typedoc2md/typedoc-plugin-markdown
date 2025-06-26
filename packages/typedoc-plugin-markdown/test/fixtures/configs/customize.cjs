// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/customize/index.ts'],
  plugin: [
    '../../../dist/index.js',
    '../custom-plugins/custom-theme.mjs',
    '../custom-plugins/custom-router.mjs',
    '../custom-plugins/navigation-plugin.mjs',
    '../custom-plugins/urls-plugin.mjs',
  ],
  disableSources: true,
  readme: 'none',
  theme: 'custom-theme',
  router: 'custom-router',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/customize/members/opts-1',
    },
  ],
};
