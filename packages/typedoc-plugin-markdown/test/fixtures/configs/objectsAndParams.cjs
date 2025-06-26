// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/reflections/index.ts'],
  plugin: ['../../../dist/index.js'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  expandObjects: true,
  expandParameters: true,
  tableColumnSettings: {
    leftAlignHeaders: true,
  },
  router: 'member',
  blockTagsPreserveOrder: ['@deprecated', '@see'],
};

const opts1 = {};

const opts2 = {
  parametersFormat: 'table',
  classPropertiesFormat: 'table',
  interfacePropertiesFormat: 'table',
  typeDeclarationVisibility: 'compact',
  useCodeBlocks: true,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/objectsAndParams/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/objectsAndParams/members/opts-2',
      options: {
        ...opts2,
      },
    },
  ],
};
