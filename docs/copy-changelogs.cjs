const fs = require('fs');
const path = require('path');

const docsRoot = __dirname;
const repoRoot = path.resolve(docsRoot, '..');

const changelogs = [
  {
    from: 'packages/typedoc-plugin-markdown/CHANGELOG.md',
    to: 'content/docs/CHANGELOG.md',
  },
  {
    from: 'packages/typedoc-vitepress-theme/CHANGELOG.md',
    to: 'content/plugins/vitepress/CHANGELOG.md',
  },
  {
    from: 'packages/typedoc-plugin-remark/CHANGELOG.md',
    to: 'content/plugins/remark/CHANGELOG.md',
  },
  {
    from: 'packages/typedoc-plugin-frontmatter/CHANGELOG.md',
    to: 'content/plugins/frontmatter/CHANGELOG.md',
  },
  {
    from: 'packages/docusaurus-plugin-typedoc/CHANGELOG.md',
    to: 'content/plugins/docusaurus/changelog/docusaurus-plugin.md',
  },
  {
    from: 'packages/typedoc-docusaurus-theme/CHANGELOG.md',
    to: 'content/plugins/docusaurus/changelog/docusaurus-theme.md',
  },
];

changelogs.forEach(({ from, to, title }) => {
  const fromPath = path.join(repoRoot, from);
  const toPath = path.join(docsRoot, to);
  fs.mkdirSync(path.dirname(toPath), { recursive: true });

  if (!title) {
    fs.copyFileSync(fromPath, toPath);
    return;
  }

  const content = fs
    .readFileSync(fromPath, 'utf8')
    .replace(/^# Changelog/, `# ${title}`);

  fs.writeFileSync(toPath, content);
});
