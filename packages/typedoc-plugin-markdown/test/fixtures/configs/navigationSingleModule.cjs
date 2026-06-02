// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/navigation/module-1/index.ts'],
  plugin: ['../../../dist/index.js'],
  hidePageHeader: true,
  readme: 'none',
};

const opts1 = {
  navigation: {
    includeCategories: true,
    includeGroups: false,
  },
  categorizeByGroup: false,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/navigationSingleModule/members/opts-1',
      options: {
        navigationJson:
          './test/fixtures/out/md/navigationSingleModule/members/opts-1/sidebar.json',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/navigationSingleModule/modules/opts-1',
      options: {
        router: 'module',
        navigationJson:
          './test/fixtures/out/md/navigationSingleModule/modules/opts-1/sidebar.json',

        ...opts1,
      },
    },
  ],
};
