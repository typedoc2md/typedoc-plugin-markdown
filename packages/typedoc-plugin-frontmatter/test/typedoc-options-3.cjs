// @ts-check

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions & import('typedoc-plugin-frontmatter').PluginOptions} */
module.exports = {
  entryPoints: ['./stubs.ts'],
  tsconfig: '../tsconfig.test.json',
  readme: 'none',
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  frontmatterGlobals: {
    isTrue: true,
    veryLong:
      'This is a long string that would normally wrap over multiple lines when the text exceeds a certain length.',
  },
  yamlStringifyOptions: {
    trueStr: 'yes',
    defaultStringType: 'QUOTE_SINGLE',
    defaultKeyType: 'PLAIN',
  },
  disableSources: true,
};
