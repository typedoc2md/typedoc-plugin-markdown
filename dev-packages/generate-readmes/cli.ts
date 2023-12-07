#!/usr/bin/env ts-node

import { DOCS_CONFIG } from '@dev-packages/helpers';
import { consola } from 'consola';
import * as fs from 'fs';

main();

async function main() {
  const packagesPromises = [
    'typedoc-plugin-markdown',
    'typedoc-plugin-frontmatter',
    'typedoc-plugin-remark',
    'typedoc-github-wiki-theme',
    'typedoc-gitlab-wiki-theme',
    'typedoc-vitepress-theme',
    'docusaurus-plugin-typedoc',
  ].map(async (packageName) => {
    const packageJson = await import(
      `../../packages/${packageName}/package.json`
    );
    return {
      name: packageName,
      description: packageJson.description,
    };
  });
  const packages = await Promise.all(packagesPromises);

  writeRepositoryReadme(packages);
  packages.forEach((packageItem) => writePackageReadme(packageItem));
  consola.success(`Generate readmes complete`);
}

function writeRepositoryReadme(packages: any) {
  const readme = ['# Packages\n'];
  const headers: string[] = [];
  headers.push('| Package | Badges | ');
  headers.push('| :---| :---|');

  const rows = packages.map((packageItem) => {
    const badges = [
      `![npm](https://img.shields.io/npm/v/${packageItem.name}%2Fnext?\&logo=npm)`,
      `![Downloads](https://img.shields.io/npm/dm/${packageItem.name})`,
    ];
    return (
      [
        `[${packageItem.name}](./packages/${packageItem.name}#readme)`,
        badges.join(' '),
      ].join(' | ') + ' | '
    );
  });

  readme.push(...headers, ...rows);

  fs.writeFileSync('README.md', readme.join('\n'));
}

function writePackageReadme(packageItem: any) {
  const readme = [`# ${packageItem.name}`];
  const badges = [
    `![npm](https://img.shields.io/npm/v/${packageItem.name}%2Fnext?\&logo=npm)`,
    `![Downloads](https://img.shields.io/npm/dm/${packageItem.name})`,
    `[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=next)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)`,
  ];

  readme.push(badges.join(' '));
  readme.push(`${packageItem.description}`);
  const docLink = `https://typedoc-plugin-markdown.org${
    DOCS_CONFIG[packageItem.name].docsPath
  }`;

  readme.push('## Installation');
  readme.push(`\`\`\`shell
  npm install ${packageItem.name} --save-dev
  \`\`\``);

  readme.push('## Documentation');
  const resources = [`Please visit ${docLink}.`];
  readme.push(resources.join('\n'));
  readme.push('## License');
  readme.push(`Released under the [MIT License](./LICENSE).`);

  fs.writeFileSync(
    `./packages/${packageItem.name}/README.md`,
    readme.join('\n\n'),
  );
}
