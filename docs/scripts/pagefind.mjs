// @ts-check

import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Builds the Pagefind search index from the prerendered pages.
 *
 * Nextra's documented command indexes `.next/server/app`, which is where
 * `next build` writes prerendered HTML locally. On Vercel, Next.js builds
 * through a deployment adapter and writes each page to
 * `.next/server/route-cache/APP_PAGE/<hash of the source route>/$/<path>.html`
 * instead, so that command indexed an empty directory and the deployment
 * failed. Every docs page comes from the one catch-all route, so inside its
 * hash directory the paths are the site's real URLs.
 *
 * The pages from every location are copied into one staging directory,
 * which Pagefind then indexes as a normal site. Pagefind only indexes
 * elements marked `data-pagefind-body`, which Nextra adds to its content
 * pages, so error and system pages are left out as before.
 */

const distDir = path.resolve('.next');
const stagingDir = path.join(distDir, 'pagefind-site');
const outputDir = path.resolve('public', '_pagefind');

const roots = [
  path.join(distDir, 'server', 'app'),
  ...listDirectories(
    path.join(distDir, 'server', 'route-cache', 'APP_PAGE'),
  ).map((dir) => path.join(dir, '$')),
].filter((dir) => fs.existsSync(dir));

fs.rmSync(stagingDir, { recursive: true, force: true });

const staged = new Set();
for (const root of roots) {
  for (const file of listHtmlFiles(root)) {
    const relative = path.relative(root, file);
    if (staged.has(relative)) {
      continue;
    }
    staged.add(relative);
    const target = path.join(stagingDir, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
  }
}

if (staged.size === 0) {
  console.error(
    `No prerendered pages found under ${roots.join(', ') || distDir}. Run next build first.`,
  );
  process.exit(1);
}

console.log(`Indexing ${staged.size} prerendered pages with Pagefind`);

const result = spawnSync(
  'pagefind',
  ['--site', stagingDir, '--output-path', outputDir],
  { stdio: 'inherit', shell: process.platform === 'win32' },
);

process.exit(result.status ?? 1);

function listDirectories(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(dir, entry.name));
}

function listHtmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listHtmlFiles(full);
    }
    return entry.name.endsWith('.html') ? [full] : [];
  });
}
