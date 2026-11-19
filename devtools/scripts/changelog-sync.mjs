import { consola } from 'consola';
import * as fs from 'fs';

/**
 * Mirrors each package changelog into its counterpart under `docs/content`.
 *
 * The docs copies duplicate the package changelog under a frontmatter block
 * that gives each page its meta description. They were previously kept up to
 * date by hand, so a release could ship with the docs site a version behind.
 * The Release workflow runs this after dating the published entries.
 *
 * Packages absent from this map have no changelog page in the docs.
 */
const CHANGELOGS = {
  'packages/typedoc-plugin-markdown/CHANGELOG.md':
    'docs/content/docs/CHANGELOG.md',
  'packages/typedoc-plugin-frontmatter/CHANGELOG.md':
    'docs/content/plugins/frontmatter/CHANGELOG.md',
  'packages/typedoc-plugin-remark/CHANGELOG.md':
    'docs/content/plugins/remark/CHANGELOG.md',
  'packages/typedoc-vitepress-theme/CHANGELOG.md':
    'docs/content/plugins/vitepress/CHANGELOG.md',
  'packages/docusaurus-plugin-typedoc/CHANGELOG.md':
    'docs/content/plugins/docusaurus/changelog/docusaurus-plugin.md',
  'packages/typedoc-docusaurus-theme/CHANGELOG.md':
    'docs/content/plugins/docusaurus/changelog/docusaurus-theme.md',
};

main();

function main() {
  const missing = Object.entries(CHANGELOGS)
    .flat()
    .filter((file) => !fs.existsSync(file));

  if (missing.length) {
    consola.error(
      `Changelog paths no longer exist, update the map in this script:\n  ${missing.join('\n  ')}`,
    );
    process.exit(1);
  }

  const synced = Object.entries(CHANGELOGS).filter(([source, target]) => {
    const contents =
      frontmatter(source.split('/')[1]) + fs.readFileSync(source, 'utf-8');
    if (contents === fs.readFileSync(target, 'utf-8')) {
      return false;
    }
    fs.writeFileSync(target, contents);
    return true;
  });

  if (!synced.length) {
    consola.info('Docs changelogs already in sync');
    return;
  }

  synced.forEach(([, target]) => consola.success(`Synced ${target}`));
}

/**
 * The docs page's frontmatter, named after the package directory, which
 * matches the published package name. Must match `docs/copy-changelogs.cjs`,
 * which rewrites the same files before every docs build.
 */
function frontmatter(packageName) {
  return `---\ndescription: 'Release notes for ${packageName}, listing the changes in each published version.'\n---\n\n`;
}
