// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/reflections/index.ts'],
  plugin: [
    '../../../dist/index.js',
    '../custom-plugins/normalize-sources.mjs',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  tableColumnSettings: {
    hideSources: true,
    leftAlignHeaders: true,
  },
  excludePrivate: false,
  blockTagsPreserveOrder: ['@deprecated', '@see'],
  expandObjects: false,
  includeHierarchySummary: true,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/reflections/members/opts-1',
    },
    {
      name: 'markdown',
      path: '../out/md/reflections/modules/opts-1',
      options: {
        router: 'module',
      },
    },
    {
      name: 'html',
      path: '../out/html/reflections',
    },
  ],
};
