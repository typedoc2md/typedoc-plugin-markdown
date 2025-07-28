// @ts-check

const baseOptions = require('../typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions & import('../../../dist/index.js').PluginOptions} */
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
    member:
      '{group} - {kind} - {name} - `{rawName}` - {keyword} - {codeKeyword} - ',
  },
  textContentMappings: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
    {
      name: 'html',
      path: '../out/html/text',
    },
  ],
};
