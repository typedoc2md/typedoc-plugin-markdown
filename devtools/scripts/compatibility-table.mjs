import { consola } from 'consola';
import * as fs from 'fs';

/**
 * Keeps the compatibility table in `docs/content/docs/releases.mdx` in step
 * with the core plugin's published version and its `typedoc` peer range.
 *
 * - A release on the current TypeDoc range extends the top row's upper bound
 *   to the new `major.minor.x`.
 * - A release that changes the peer range opens a new row above it, leaving
 *   the previous row closed at the last version on the old range.
 *
 * The Release workflow runs this after publishing, alongside the changelog
 * scripts, so the update lands in the same pull request as the dates. It is
 * idempotent: a version already covered by the table changes nothing.
 */

const PACKAGE_JSON = 'packages/typedoc-plugin-markdown/package.json';
const RELEASES_PAGE = 'docs/content/docs/releases.mdx';

const ROW = /^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*$/;

if (process.argv[1] === new URL(import.meta.url).pathname) {
  main();
}

function main() {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf-8'));
  const contents = fs.readFileSync(RELEASES_PAGE, 'utf-8');

  const updated = updateCompatibilityTable(
    contents,
    pkg.version,
    pkg.peerDependencies.typedoc,
  );

  if (updated === contents) {
    consola.info('Compatibility table already covers the current version');
    return;
  }

  fs.writeFileSync(RELEASES_PAGE, updated);
  consola.success(`Updated the compatibility table in ${RELEASES_PAGE}`);
}

/**
 * Returns the page with its compatibility table brought up to `version`
 * on `peerRange`, or the page unchanged when nothing needs to move.
 */
export function updateCompatibilityTable(contents, version, peerRange) {
  if (version.includes('-')) {
    return contents; // prereleases are not listed
  }

  const [major, minor] = version.split('.');
  const current = `${major}.${minor}.x`;

  const lines = contents.split('\n');
  const header = lines.findIndex((line) => /^\|\s*Plugin\s*\|/.test(line));
  if (header === -1) {
    throw new Error(`No compatibility table found in ${RELEASES_PAGE}`);
  }

  const first = header + 2; // skip the separator row
  let last = first;
  while (last < lines.length && ROW.test(lines[last])) {
    last++;
  }

  const rows = lines.slice(first, last).map((line) => {
    const [, plugin, typedoc] = line.match(ROW);
    return { plugin, typedoc };
  });

  const [top] = rows;
  if (top.typedoc === peerRange) {
    const lower = top.plugin.split(' - ')[0];
    if (lower === current) {
      return contents;
    }
    const range = `${lower} - ${current}`;
    if (top.plugin === range) {
      return contents;
    }
    top.plugin = range;
  } else {
    rows.unshift({ plugin: current, typedoc: peerRange });
  }

  const widths = [
    Math.max('Plugin'.length, ...rows.map((row) => row.plugin.length)),
    Math.max('TypeDoc'.length, ...rows.map((row) => row.typedoc.length)),
  ];
  const cell = (text, i) => ` ${text.padEnd(widths[i])} `;
  const table = [
    `|${cell('Plugin', 0)}|${cell('TypeDoc', 1)}|`,
    `|${cell('-'.repeat(widths[0]), 0)}|${cell('-'.repeat(widths[1]), 1)}|`,
    ...rows.map((row) => `|${cell(row.plugin, 0)}|${cell(row.typedoc, 1)}|`),
  ];

  return [...lines.slice(0, header), ...table, ...lines.slice(last)].join('\n');
}
