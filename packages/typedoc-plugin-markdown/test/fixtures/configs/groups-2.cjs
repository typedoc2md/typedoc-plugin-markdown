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
  theme: 'stub-groups',
  disableSources: true,
  entryFileName: 'index.md',
  tableColumnSettings: {
    leftAlignHeaders: true,
  },
  readme: 'none',
  groupOrder: ['Functions', 'Interfaces', '*'],
  categorizeByGroup: false,
};

const opts2 = {
  customAnchorsFormat: 'escapedCurlyBrace',
  useCustomAnchors: true,
  useHTMLAnchors: true,
  indexFormat: 'htmlTable',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/groups/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/groups/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
