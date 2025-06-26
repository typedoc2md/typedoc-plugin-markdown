// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/comments/index.ts'],
  plugin: [
    '../../../dist/index.js',
    '../custom-plugins/normalize-sources.mjs',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  readme: 'none',
  excludePrivate: false,
  useHTMLAnchors: true,
  anchorPrefix: 'api-',
};

const opts1 = {
  enumMembersFormat: 'table',
  parametersFormat: 'table',
  propertiesFormat: 'list',
  classPropertiesFormat: 'table',
  propertyMembersFormat: 'table',
  typeDeclarationFormat: 'table',
  typeAliasPropertiesFormat: 'table',
};

const opts2 = {
  preserveAnchorCasing: true,
  publicPath: 'https://example.com',
  sanitizeComments: true,
  flattenOutputFiles: true,
  enumMembersFormat: 'htmlTable',
  parametersFormat: 'htmlTable',
  classPropertiesFormat: 'htmlTable',
  interfacePropertiesFormat: 'htmlTable',
  typeAliasPropertiesFormat: 'htmlTable',
  typeDeclarationFormat: 'htmlTable',
  useCodeBlocks: false,
  expandObjects: true,
  tableColumnSettings: {
    hideDefaults: true,
    hideInherited: true,
    hideModifiers: true,
    hideOverrides: true,
    hideSources: true,
    hideValues: true,
    leftAlignHeaders: true,
  },
  blockTagsPreserveOrder: ['@example'],
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/comments/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/comments/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/comments/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/comments/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
