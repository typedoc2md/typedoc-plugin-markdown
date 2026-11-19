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

// Must match the frontmatter written by devtools/scripts/changelog-sync.mjs,
// which keeps the committed copies in step at release time.
function frontmatter(packageName) {
  return `---\ndescription: 'Release notes for ${packageName}, listing the changes in each published version.'\n---\n\n`;
}

changelogs.forEach(({ from, to, title }) => {
  const fromPath = path.join(repoRoot, from);
  const toPath = path.join(docsRoot, to);
  fs.mkdirSync(path.dirname(toPath), { recursive: true });

  let content = fs.readFileSync(fromPath, 'utf8');
  if (title) {
    content = content.replace(/^# Changelog/, `# ${title}`);
  }

  fs.writeFileSync(toPath, frontmatter(from.split('/')[1]) + content);
});
