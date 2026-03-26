import { DOCS_CONFIG } from '@devtools/helpers';
import { consola } from 'consola';
import * as fs from 'fs';

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

  writeRepositoryReadme(packages);

  packages.forEach((packageItem) => writePackageReadme(packageItem));

  consola.success(`Generate readmes complete`);
}

function writeRepositoryReadme(packages: any) {
  const readme: string[] = ['# typedoc-plugin-markdown'];

  readme.push('## Overview');
  readme.push(
    [
      'This repository provides a set of packages for generating TypeDoc output as Markdown and adapting that output for different publishing targets.',
      'It includes the core Markdown plugin, utility plugins for frontmatter and remark transforms, themes for wiki and static-site workflows, and a Docusaurus integration that can run TypeDoc as part of the site toolchain.',
      'If you want the simplest starting point, begin with [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown#readme).',
    ].join('\n\n'),
  );

  readme.push('## Packages');

  const headers: string[] = [];
  headers.push('| Package | Description | Downloads | Changelog |');
  headers.push('| :---| :---| :---| :---|');
  const table: string[] = [];
  const rows = packages.map((packageItem) => {
    const badges = [
      `![Downloads](https://img.shields.io/npm/dw/${packageItem.name}?label=↓)`,
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

function getPackageReadmeContent(packageName: string): Pick<
  PackageReadmeContent,
  'overview' | 'highlights'
> {
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

function writePackageReadme(packageItem: any) {
  const ciName =
    packageItem.name === 'typedoc-plugin-markdown'
      ? 'ci.yml'
      : `ci.${packageItem.name}.yml`;
  const content = PACKAGE_README_CONTENT[packageItem.name];
  const readme = [`# ${packageItem.name}`];
  const badges = [
    `[![npm](https://img.shields.io/npm/v/${packageItem.name}.svg?logo=npm)](https://www.npmjs.com/package/${packageItem.name})`,
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

  readme.push('## License');
  readme.push('MIT');

  fs.writeFileSync(
    `./packages/${packageItem.name}/README.md`,
    readme.join('\n\n'),
  );
}

function docText(docLink?: string) {
  return `Please visit [${docLink}](${docLink}) for comprehensive documentation, including options and usage guides.`;
}
