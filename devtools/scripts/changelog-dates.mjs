import { consola } from 'consola';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Appends the release date to the heading Changesets has written, as
 * `## 1.2.3 (2026-08-25)`. Changesets writes the version alone, so the Release
 * workflow runs this once packages have actually been published, and commits
 * the result back. The date therefore reflects the publish, not the point the
 * release PR was opened.
 *
 * Only the topmost heading is considered, and only when it has no date, so the
 * script is safe to re-run and leaves earlier entries untouched.
 */

const PACKAGES_DIR = 'packages';
const HEADING = /^## (\d+\.\d+\.\d+[^\s]*)\s*$/;

main();

function main() {
  const date = new Date().toISOString().slice(0, 10);

  const updated = fs
    .readdirSync(PACKAGES_DIR)
    .map((pkg) => path.join(PACKAGES_DIR, pkg, 'CHANGELOG.md'))
    .filter((changelog) => fs.existsSync(changelog))
    .filter((changelog) => addDate(changelog, date));

  if (!updated.length) {
    consola.info('No undated changelog headings found');
    return;
  }

  updated.forEach((changelog) => consola.success(`Dated ${changelog}`));
}

function addDate(changelog, date) {
  const lines = fs.readFileSync(changelog, 'utf-8').split('\n');
  const index = lines.findIndex((line) => line.startsWith('## '));

  if (index === -1 || !HEADING.test(lines[index])) {
    return false;
  }

  lines[index] = `${lines[index].trimEnd()} (${date})`;
  fs.writeFileSync(changelog, lines.join('\n'));
  return true;
}
