// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/reflections/index.ts'],
  plugin: [
    'typedoc-plugin-markdown',
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
  readme: 'none',
};

const opts2 = {
  parametersFormat: 'table',
  classPropertiesFormat: 'table',
  interfacePropertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  enumMembersFormat: 'table',
  propertyMembersFormat: 'table',
  typeAliasPropertiesFormat: 'table',
  indexFormat: 'table',
  useCodeBlocks: true,
  expandParameters: true,
  navigationModel: {
    excludeGroups: true,
  },
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/reflections/members/opts-2',
      options: {
        ...opts2,
      },
    },

    {
      name: 'markdown',
      path: '../out/md/reflections/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
