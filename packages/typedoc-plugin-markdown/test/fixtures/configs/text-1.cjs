// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/text/*.ts'],
  plugin: ['../../../dist/index.js', '../custom-plugins/navigation-plugin.mjs'],
  disableSources: true,
  tableColumnSettings: { leftAlignHeaders: true },
  includeVersion: true,
  propertiesFormat: 'table',
  readme: 'none',
  pageTitleTemplates: {
    index: ':tada: Custom Index Title',
    member: '{name}',
  },
  textContentMappings: {
    'breadcrumb.index': 'Home',
    'header.title': 'My API -  {version}',
    'footer.text': 'Copyright Test',
  },
  lang: 'ja',
  locales: {
    ja: {
      theme_type: 'Type (ja)',
    },
  },
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/text/members/opts-1',
    },
    {
      name: 'markdown',
      path: '../out/md/text/modules/opts-1',
      options: {
        router: 'module',
      },
    },
  ],
};
