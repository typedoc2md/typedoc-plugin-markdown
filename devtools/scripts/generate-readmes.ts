import { DOCS_CONFIG } from '@devtools/helpers';
import { consola } from 'consola';
import * as fs from 'fs';
import * as path from 'path';

main();
copyChangelog();

async function copyChangelog() {
  const changelog = fs.readFileSync(
    path.join(
      __dirname,
      '../../packages/typedoc-plugin-markdown/CHANGELOG_V4.md',
    ),
  );
  const readmeContents = changelog
    .toString()
    .replace(/^>(.*)$/gm, '<Callout>$1</Callout>')
    .replace(/<!--[\s\S]*?-->/g, '');

  fs.writeFileSync(
    path.join(__dirname, '../../docs/pages/docs/changelog.mdx'),
    `import { Callout } from 'nextra/components';\n\n` + readmeContents,
  );
}

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
  headers.push('| Package | Badges | ');
  headers.push('| :---| :---|');
  const table: string[] = [];
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
  table.push(...headers, ...rows);

  readme.push(table.join('\n'));

  readme.push('## Documentation');

  readme.push(
    'Please see [typedoc-plugin-markdown.org](https://typedoc-plugin-markdown.org).',
  );

  readme.push('## Examples');

  readme.push(
    'Please see the [examples repository](https://github.com/tgreyuk/typedoc-plugin-markdown-examples).',
  );

  readme.push('## Contributing');

  readme.push(
    'If you would like to contribute towards this project please read the [contributing guide](./CONTRIBUTING.md).',
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
    `![npm](https://img.shields.io/npm/v/${packageItem.name}%2Fnext?\&logo=npm)`,
    `[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/${ciName}/badge.svg?branch=next)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/${ciName})`,
  ];

  readme.push(badges.join(' '));
  readme.push(`${packageItem.description}`);
  const docLink = `https://typedoc-plugin-markdown.org${
    DOCS_CONFIG[packageItem.name].docsPath
  }`;

  readme.push('## Installation');
  readme.push(`\`\`\`shell
  npm install ${packageItem.name}@next --save-dev
  \`\`\``);

  readme.push('## Documentation');
  const resources = [docText(docLink)];
  readme.push(resources.join('\n'));

  fs.writeFileSync(
    `./packages/${packageItem.name}/README.md`,
    readme.join('\n\n'),
  );
}

function docText(docLink?: string) {
  return `Please visit the [${docLink}](${docLink}) for comprehensive documentation, including options and usage guides.`;
}
