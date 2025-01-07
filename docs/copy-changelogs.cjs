var copyfiles = require('copyfiles');

const changelogs = [
  {
    from: '../packages/typedoc-plugin-markdown/CHANGELOG.md',
    to: 'pages/docs',
  },
  {
    from: '../packages/typedoc-vitepress-theme/CHANGELOG.md',
    to: 'pages/plugins/vitepress',
  },
  {
    from: '../packages/docusaurus-plugin-typedoc/CHANGELOG.md',
    to: 'pages/plugins/docusaurus',
  },
  {
    from: '../packages/typedoc-plugin-remark/CHANGELOG.md',
    to: 'pages/plugins/remark',
  },
  {
    from: '../packages/typedoc-plugin-frontmatter/CHANGELOG.md',
    to: 'pages/plugins/frontmatter',
  },
];

changelogs.forEach(({ from, to }) => {
  copyfiles([from, to], { up: 3 }, () => {});
});
