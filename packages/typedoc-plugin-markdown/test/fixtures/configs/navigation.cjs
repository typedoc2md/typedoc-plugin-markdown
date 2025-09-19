// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: [
    '../src/navigation/module-1/index.ts',
    '../src/navigation/module-2/index.ts',
    '../src/navigation/module-3/index.ts',
  ],
  plugin: ['../../../dist/index.js'],
  hidePageHeader: true,
  readme: 'none',
};

const opts1 = {
  navigation: {
    includeCategories: false,
    includeGroups: false,
    includeFolders: false,
  },
  categorizeByGroup: true,
};

const opts2 = {
  navigation: {
    includeCategories: true,
    includeGroups: true,
    includeFolders: true,
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
      path: '../out/md/navigation/members/opts-1',
      options: {
        navigationJson:
          './test/fixtures/out/md/navigation/members/opts-1/sidebar.json',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/navigation/members/opts-2',
      options: {
        navigationJson:
          './test/fixtures/out/md/navigation/members/opts-2/sidebar.json',
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/navigation/modules/opts-1',
      options: {
        router: 'module',
        navigationJson:
          './test/fixtures/out/md/navigation/modules/opts-1/sidebar.json',

        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/navigation/modules/opts-2',
      options: {
        router: 'module',
        navigationJson:
          './test/fixtures/out/md/navigation/modules/opts-2/sidebar.json',
        ...opts2,
      },
    },
  ],
};
