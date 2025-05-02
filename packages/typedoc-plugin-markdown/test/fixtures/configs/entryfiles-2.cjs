// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/entryfiles/*'],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  entryFileName: 'index.md',
  entryModule: 'entry-module',
  disableSources: true,
  fileExtension: '.mdx',
  name: '@scope/entryfile',
  readme: 'none',
};

const opts2 = {
  excludeScopesInPaths: true,
  githubPages: false,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/entryfiles/members/opts-2',
      options: {
        ...opts2,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/entryfiles/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
