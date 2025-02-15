// @ts-check

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions & import('typedoc-plugin-frontmatter').PluginOptions} */
module.exports = {
  entryPoints: ['./stubs.ts'],
  tsconfig: '../tsconfig.test.json',
  out: './out',
  readme: './some-readme.md',
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-plugin-frontmatter',
    './custom-plugin.mjs',
  ],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  preserveFrontmatterCommentTags: true,
  readmeFrontmatter: {
    onReadme: true,
  },
  indexFrontmatter: {
    onIndex: true,
  },
  frontmatterGlobals: {
    layout: 'blog',
    veryLong:
      'This is a long string that would normally wrap over multiple lines when the text exceeds a certain length.',
    navOrder: 1,
    hide: true,
  },
  frontmatterCommentTags: ['tagOne', 'tagTwo', 'tagThree'],
  disableSources: true,
};
