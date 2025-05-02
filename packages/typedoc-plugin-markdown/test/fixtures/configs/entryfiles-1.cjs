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
};

const opts1 = { entryFileName: 'README.md', githubPages: true };

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/entryfiles/members/opts-1',
      options: {
        ...opts1,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/entryfiles/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
  ],
};
