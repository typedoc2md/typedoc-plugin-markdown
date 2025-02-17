var copyfiles = require('copyfiles');

const changelogs = [
  {
    from: '../packages/typedoc-plugin-markdown/CHANGELOG.md',
    to: 'content/docs',
  },
  {
    from: '../packages/typedoc-vitepress-theme/CHANGELOG.md',
    to: 'content/plugins/vitepress',
  },
  {
    from: '../packages/docusaurus-plugin-typedoc/CHANGELOG.md',
    to: 'content/plugins/docusaurus',
  },
  {
    from: '../packages/typedoc-plugin-remark/CHANGELOG.md',
    to: 'content/plugins/remark',
  },
  {
    from: '../packages/typedoc-plugin-frontmatter/CHANGELOG.md',
    to: 'content/plugins/frontmatter',
  },
];

changelogs.forEach(({ from, to }) => {
  copyfiles([from, to], { up: 3 }, () => {});
});
