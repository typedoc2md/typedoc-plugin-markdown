import { DOCS_CONFIG } from '@devtools/helpers';
import { consola } from 'consola';
import * as fs from 'fs';
import prettier from 'prettier';

type PackageReadmeContent = {
  overview: string[];
  installation?: string[];
  highlights?: string[];
};

const PACKAGE_README_CONTENT: Record<string, PackageReadmeContent> = {
  'typedoc-plugin-markdown': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-plugin-frontmatter': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-plugin-frontmatter --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-plugin-remark': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-plugin-remark --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-github-wiki-theme': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-github-wiki-theme --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-gitlab-wiki-theme': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-gitlab-wiki-theme --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-vitepress-theme': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-vitepress-theme --save-dev',
      '```',
    ],
    highlights: [],
  },
  'typedoc-docusaurus-theme': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown typedoc-docusaurus-theme --save-dev',
      '```',
    ],
    highlights: [],
  },
  'docusaurus-plugin-typedoc': {
    overview: [],
    installation: [
      '```shell',
      'npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev',
      '```',
    ],
    highlights: [],
  },
};

main();

async function main() {
  const packagesPromises = [
    'typedoc-plugin-markdown',
    'typedoc-plugin-frontmatter',
    'typedoc-plugin-remark',
    'typedoc-github-wiki-theme',
    'typedoc-gitlab-wiki-theme',
    'typedoc-vitepress-theme',
    'typedoc-docusaurus-theme',
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

  packages.forEach((packageItem) => {
    PACKAGE_README_CONTENT[packageItem.name] = {
      ...PACKAGE_README_CONTENT[packageItem.name],
      ...getPackageReadmeContent(packageItem.name),
    };
  });

  await writeRepositoryReadme(packages);

  await Promise.all(
    packages.map((packageItem) => writePackageReadme(packageItem)),
  );

  consola.success(`Generate readmes complete`);
}

async function writeRepositoryReadme(packages: any) {
  const readme: string[] = ['# typedoc-plugin-markdown'];

  readme.push(
    '> Generate TypeScript API documentation as Markdown with [TypeDoc](https://typedoc.org).',
  );

  readme.push('## Overview');
  readme.push(
    [
      'This repository contains the core Markdown plugin, utility plugins for frontmatter and remark transforms, target-specific themes for wiki and static-site workflows, and a Docusaurus plugin that can run TypeDoc inside the Docusaurus lifecycle.',
      'Start with [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown#readme) for the core Markdown output, then add the package that matches where you publish your docs.',
    ].join('\n\n'),
  );

  readme.push('## Packages');

  const headers: string[] = [];
  headers.push('| Package | Description | Downloads | Changelog |');
  headers.push('| :---| :---| :---| :---|');
  const table: string[] = [];
  const rows = packages.map((packageItem) => {
    const badges = [
      `![Downloads](https://img.shields.io/npm/dw/${packageItem.name}?label=npm)`,
    ];
    return (
      [
        `[${packageItem.name}](./packages/${packageItem.name}#readme)`,
        packageItem.description,
        ...badges,
        `[Changelog](./packages/${packageItem.name}/CHANGELOG.md)`,
      ].join(' | ') + ' | '
    );
  });
  table.push(...headers, ...rows);

  readme.push(table.join('\n'));

  readme.push(
    'For Docusaurus, use `docusaurus-plugin-typedoc` if you want Docusaurus to run TypeDoc for you, or `typedoc-docusaurus-theme` if you run TypeDoc directly.',
  );

  readme.push('## Documentation');

  readme.push(
    'See [typedoc-plugin-markdown.org](https://typedoc-plugin-markdown.org) for installation, options, guides, and package documentation.',
  );

  readme.push('## Contributing');

  readme.push(
    'If you would like to contribute towards this project please read the [contributing guide](./CONTRIBUTING.md).',
  );

  readme.push('## License');

  readme.push('Released under the [MIT License](./LICENSE).');

  await writeMarkdownFile('README.md', readme);
}

function getPackageReadmeContent(
  packageName: string,
): Pick<PackageReadmeContent, 'overview' | 'highlights'> {
  const docsIndexPath = getDocsIndexPath(packageName);
  const content = fs.readFileSync(docsIndexPath, 'utf8');

  return {
    overview: extractParagraphs(
      content,
      getPackageSectionHeading(packageName, 'Overview') ?? '## Overview',
    ),
    highlights: extractListItems(
      content,
      getPackageSectionHeading(packageName, 'Features') ?? '## Features',
    ),
  };
}

function getDocsIndexPath(packageName: string) {
  const docsPath = DOCS_CONFIG[packageName]?.docsPath;

  if (!docsPath) {
    throw new Error(`Missing docsPath for package "${packageName}".`);
  }

  if (docsPath === '/docs') {
    return './docs/content/docs/index.mdx';
  }

  return `./docs/content${docsPath}/index.mdx`;
}

function getPackageSectionHeading(
  packageName: string,
  section: 'Overview' | 'Features',
) {
  const heading = `## README ${section}: ${packageName}`;

  if (
    packageName === 'typedoc-docusaurus-theme' ||
    packageName === 'docusaurus-plugin-typedoc'
  ) {
    return heading;
  }

  return null;
}

function extractParagraphs(content: string, heading: string) {
  const section = extractSection(content, heading);

  return section
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(
      (paragraph) =>
        paragraph.length > 0 &&
        !paragraph.startsWith('<') &&
        !paragraph.startsWith('import ') &&
        !paragraph.startsWith('{/*'),
    )
    .map(normalizeDocsLinks);
}

function extractListItems(content: string, heading: string) {
  const section = extractSection(content, heading);

  return section
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => normalizeDocsLinks(line.slice(2)));
}

function extractSection(content: string, heading: string) {
  const escapedHeading = escapeRegExp(heading);
  const match = content.match(
    new RegExp(`${escapedHeading}\\n\\n([\\s\\S]*?)(?:\\n## |\\n# |$)`),
  );

  if (!match?.[1]) {
    throw new Error(`Unable to extract section "${heading}" from docs index.`);
  }

  return match[1].trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeDocsLinks(value: string) {
  return value.replace(
    /\]\((\/[^)]+)\)/g,
    '](https://typedoc-plugin-markdown.org$1)',
  );
}

async function writePackageReadme(packageItem: any) {
  const ciName =
    packageItem.name === 'typedoc-plugin-markdown'
      ? 'ci.yml'
      : `ci.${packageItem.name}.yml`;
  const content = PACKAGE_README_CONTENT[packageItem.name];
  const readme = [`# ${packageItem.name}`];
  const badges = [
    `[![npm](https://img.shields.io/npm/v/${packageItem.name}.svg?logo=npm)](https://www.npmjs.com/package/${packageItem.name})`,
    `[![Downloads](https://img.shields.io/npm/dw/${packageItem.name}?label=downloads)](https://www.npmjs.com/package/${packageItem.name})`,
    `[![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/${ciName}/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/${ciName})`,
  ];

  readme.push(badges.join(' '));
  if (content.overview.length) {
    readme.push('## Overview');
    readme.push(content.overview.join('\n\n'));
  }

  const docLink =
    packageItem.name === 'typedoc-plugin-markdown'
      ? 'https://typedoc-plugin-markdown.org/docs'
      : `https://typedoc-plugin-markdown.org${
          DOCS_CONFIG[packageItem.name].docsPath
        }`;

  if (content.installation) {
    readme.push('## Installation');
    readme.push(content.installation.join('\n'));
  }

  if (content.highlights?.length) {
    readme.push('## Features');
    readme.push(content.highlights.map((item) => `- ${item}`).join('\n'));
  }

  readme.push('## Documentation');
  readme.push(docText(docLink));

  if (packageItem.name === 'typedoc-plugin-markdown') {
    readme.push('## Examples');
    readme.push(
      'See the [examples repository](https://github.com/typedoc2md/typedoc-plugin-markdown-examples) for generated output and publishing examples.',
    );
  }

  readme.push('## License');
  readme.push('MIT');

  await writeMarkdownFile(`./packages/${packageItem.name}/README.md`, readme);
}

function docText(docLink?: string) {
  return `See the [documentation](${docLink}) for installation, configuration options, and usage guides.`;
}

async function writeMarkdownFile(path: string, content: string[]) {
  fs.writeFileSync(
    path,
    await prettier.format(content.join('\n\n'), { parser: 'markdown' }),
  );
}
