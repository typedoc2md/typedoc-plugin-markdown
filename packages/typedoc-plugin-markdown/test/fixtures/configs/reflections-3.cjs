// @ts-check

const baseOptions = require('../typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions & import('../../../dist/index.js').PluginOptions} */
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
};

// Because `parametersFormat: 'none'` mostly makes sense when `expandParameters`
// is set, this is adapted from reflections-2 (that has `expandParameters`)
// rather than from reflections-1 (that doesn't).
const opts3 = {
  parametersFormat: 'none',
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
      path: '../out/md/reflections/members/opts-3',
      options: {
        ...opts3,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/reflections/modules/opts-3',
      options: {
        router: 'module',
        ...opts3,
      },
    },
  ],
};
