import { Fixture } from '@devtools/fixtures/models';
import * as path from 'path';

const config: Record<string, Fixture> = {
  reflections: {
    only: false,
    entryPoints: '/reflections/index.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      hidePageHeader: true,
      hideBreadcrumbs: true,
    },
    options: [
      {},
      {
        readme: 'none',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        typeDeclarationFormat: 'table',
        enumMembersFormat: 'table',
        useCodeBlocks: true,
        expandParameters: true,
        memberPageTitle: '{name}',
      },
    ],
  },
  objectsAndParams: {
    only: false,
    outputFileStrategies: ['members'],
    entryPoints: '/reflections/index.ts',
    commonOptions: {
      hidePageHeader: true,
      hideBreadcrumbs: true,
      disableSources: true,
      expandObjects: true,
      expandParameters: true,
    },
    options: [
      {},
      {
        parametersFormat: 'table',
        propertiesFormat: 'table',
        useCodeBlocks: true,
      },
    ],
  },
  modules: {
    only: false,
    entryPoints: '/modules/**',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      readme: 'none',
      hidePageHeader: true,
      hideBreadcrumbs: true,
      disableSources: true,
      excludeScopesInPaths: true,
    },
    options: [{}],
  },
  groups: {
    only: false,
    entryPoints: '/groups/**/*.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      disableSources: true,
      entryFileName: 'index.md',
    },
    options: [
      {
        categorizeByGroup: true,
      },
      {
        readme: 'none',
        membersWithOwnFile: ['Class', 'Interface', 'Enum'],
        categorizeByGroup: false,
        excludeGroups: true,
        namedAnchors: true,
        indexFormat: 'table',
        indexPageTitle: '{projectName}',
      },
    ],
  },
  comments: {
    only: false,
    entryPoints: '/comments/index.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      disableSources: true,
      hidePageHeader: true,
      hideBreadcrumbs: true,
      enumMembersFormat: 'table',
      propertiesFormat: 'table',
      readme: 'none',
      media: './test/fixtures/media',
      includes: './test/fixtures/inc',
    },
    options: [
      {},
      {
        namedAnchors: true,
        preserveAnchorCasing: true,
        publicPath: '/some-path',
        fileExtension: 'mdx',
      },
    ],
  },
  packages: {
    only: false,
    entryPoints: '/packages/*',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryPointStrategy: 'packages',
      name: 'packages-example',
      entryFileName: 'index.md',
      disableSources: true,
    },
    options: [
      {},
      {
        excludeScopesInPaths: true,
        mergeReadme: true,
        includeVersion: true,
        indexPageTitle: 'API',
        indexFormat: 'table',
      },
    ],
  },
  package: {
    only: false,
    entryPoints: '/packages/package-1',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryPointStrategy: 'packages',
      name: 'package-example',
      includeVersion: true,
      disableSources: true,
    },
    options: [{}],
  },
  entryfiles: {
    only: false,
    entryPoints: '/entryfiles/*',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryFileName: 'index.md',
      entryModule: 'entry-module',
      disableSources: true,
      fileExtension: '.mdx',
      name: '@scope/entryfile',
    },
    options: [
      { entryFileName: 'README.md' },
      {
        readme: 'none',
        excludeScopesInPaths: true,
      },
    ],
  },
  readme: {
    entryPoints: '/readme/index.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
    },
    options: [
      {
        entryFileName: 'index.md',
        disableSources: true,
        mergeReadme: true,
      },
    ],
  },
  text: {
    only: false,
    entryPoints: '/text/*.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      disableSources: true,
    },
    options: [
      {
        includeVersion: true,
        titleLink: 'http://www.google.com',
        options: './test/fixtures/typedoc.text.cjs',
        propertiesFormat: 'table',
      },
    ],
  },
  customize: {
    only: false,
    entryPoints: '/customize/index.ts',
    outputFileStrategies: ['members'],

    commonOptions: {
      disableSources: true,
      readme: 'none',
      preserveMarkup: true,
    },
    options: [
      {
        plugin: [
          path.join(__dirname, 'custom-plugins', 'custom-theme.mjs'),
          path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
        ],
        theme: 'custom-theme',
      },
    ],
  },
};

export default config;
