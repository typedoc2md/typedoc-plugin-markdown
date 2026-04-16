// @ts-check

const baseOptions = require('../typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions & import('../../../dist/index.js').PluginOptions} */
module.exports = {
  ...baseOptions,
  entryPoints: ['../src/text/module-1.ts'],
  plugin: ['../../../dist/index.js'],
  disableSources: true,
  lang: 'ko',
  readme: 'none',
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/locales/members/ko',
    },
    {
      name: 'html',
      path: '../out/html/locales/ko',
    },
  ],
};
