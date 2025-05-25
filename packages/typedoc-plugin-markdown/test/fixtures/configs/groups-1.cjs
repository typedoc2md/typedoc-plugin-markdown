// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/groups/**/*.ts'],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/stub-groups-theme.mjs',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  name: 'typedoc-stubs',
  disableSources: true,
  entryFileName: 'index.md',
  tableColumnSettings: {
    leftAlignHeaders: true,
  },
  readme: '../README.md',
  categorizeByGroup: true,
  navigationModel: {
    excludeGroups: true,
  },
};

const opts1 = {
  indexFormat: 'table',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/groups/members/opts-1',
      options: {
        theme: 'stub-groups',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/groups/modules/opts-1',
      options: {
        router: 'module',
        theme: 'stub-groups',
        ...opts1,
      },
    },
    {
      name: 'html',
      path: '../out/html/groups',
      options: {},
    },
  ],
};
