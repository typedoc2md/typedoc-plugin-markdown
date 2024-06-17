import { DOCS_CONFIG } from '@devtools/helpers';
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
  const readme: string[] = ['# typedoc-plugin-markdown'];

  readme.push(
    'This project is a collection of packages designed for generate TypeScript API documentation as Markdown.',
  );

  readme.push('## Packages');
  const headers: string[] = [];
  headers.push('| Package | Version | Downloads | Changelog ');
  headers.push('| :---| :---| :---| :---|');
  const table: string[] = [];
  const rows = packages.map((packageItem) => {
    const badges = [
      `[![npm](https://img.shields.io/npm/v/${packageItem.name}.svg?logo=npm)](https://www.npmjs.com/package/${packageItem.name})`,
      `![Downloads](https://img.shields.io/npm/dw/${packageItem.name}?label=↓)`,
    ];
    return (
      [
        `[${packageItem.name}](./packages/${packageItem.name}#readme)`,
        ...badges,
        `[Changelog](./packages/${packageItem.name}/CHANGELOG.md)`,
      ].join(' | ') + ' | '
    );
  });
  table.push(...headers, ...rows);

  readme.push(table.join('\n'));

  readme.push('## Documentation');

  readme.push(
    'Please see [typedoc-plugin-markdown.org](https://typedoc-plugin-markdown.org).',
  );

  readme.push('## Contributing');

  readme.push(
    'If you would like to contribute towards this project please read the [contributing guide](./CONTRIBUTING.md).',
  );

  readme.push('## Examples');

  readme.push(
    'Please see the [examples repository](https://github.com/typedoc2md/typedoc-plugin-markdown-examples).',
  );

  readme.push('## License');

  readme.push('Released under the [MIT License](./LICENSE).');

  fs.writeFileSync('README.md', readme.join('\n\n'));
}

function writePackageReadme(packageItem: any) {
  const ciName =
    packageItem.name === 'typedoc-plugin-markdown'
      ? 'ci.yml'
      : `ci.${packageItem.name}.yml`;
  const readme = [`# ${packageItem.name}`];
  const badges = [
    `[![npm](https://img.shields.io/npm/v/${packageItem.name}.svg?logo=npm)](https://www.npmjs.com/package/${packageItem.name})`,
    `[![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/${ciName}/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/${ciName})`,
  ];

  readme.push(badges.join(' '));
  readme.push(`> ${packageItem.description}`);
  const docLink =
    packageItem.name === 'typedoc-plugin-markdown'
      ? 'https://typedoc-plugin-markdown.org'
      : `https://typedoc-plugin-markdown.org${
          DOCS_CONFIG[packageItem.name].docsPath
        }`;

  readme.push('## Installation');
  readme.push(`\`\`\`shell
  npm install typedoc ${packageItem.name} --save-dev
  \`\`\``);

  readme.push('## Documentation');
  const resources = [docText(docLink)];
  readme.push(resources.join('\n'));

  readme.push('## License');
  readme.push('MIT');

  fs.writeFileSync(
    `./packages/${packageItem.name}/README.md`,
    readme.join('\n\n'),
  );
}

function docText(docLink?: string) {
  return `Please visit the [${docLink}](${docLink}) for comprehensive documentation, including options and usage guides.`;
}
