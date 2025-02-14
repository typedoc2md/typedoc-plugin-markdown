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
    veryLong:
      'This is a long string that would normally wrap over multiple lines when the text exceeds a certain length.',
  },
  yamlStringifyOptions: {
    lineWidth: 0,
  },
  disableSources: true,
};
