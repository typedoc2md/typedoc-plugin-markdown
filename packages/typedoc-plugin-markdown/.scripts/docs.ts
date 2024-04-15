import * as fs from 'fs';
import * as path from 'path';

main();

async function main() {
  const fileToAdd = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'docs',
    'pages',
    'docs',
    'using-typedoc.mdx',
  );
  const content = fs.readFileSync(fileToAdd);

  const notSupported = [
    'cacheBust',
    'customCss',
    'lightHighlightTheme',
    'darkHighlightTheme',
    'markedOptions',
    'cname',
    'githubPages',
    'htmlLang',
    'sitemapBaseUrl',
    'gaID',
    'visibilityFilters',
    'searchCategoryBoosts',
    'searchGroupBoosts',
    'searchInComments',
  ].sort();

  const contentStr = content.toString();
  const typedoc = require('typedoc/package.json');
  const updatedContent = contentStr.replace(
    /(The ignored output options are:)[\s\S]*/,
    `$1\n\n${notSupported.map((key) => `- \`--${key}\` ❌`).join('\n')}\n\n*As of TypeDoc version ${typedoc.version}*\n\n`,
  );
  fs.writeFileSync(fileToAdd, updatedContent);
}
