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
        navigationModel: {
          excludeGroups: true,
        },
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
    entryPoints: [
      '/modules/module-1',
      '/modules/module-2',
      '/modules/module-3',
    ],
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      readme: 'none',
      hidePageHeader: true,
      hideBreadcrumbs: true,
      disableSources: true,
      excludeScopesInPaths: true,
      entryPointStrategy: 'expand',
    },
    options: [
      {},
      {
        flattenOutputFiles: true,
        navigationModel: {
          excludeFolders: true,
        },
      },
    ],
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
        navigationModel: {
          excludeGroups: true,
        },
      },
      {
        readme: 'none',
        membersWithOwnFile: ['Class', 'Interface', 'Enum'],
        excludeGroups: true,
        useHTMLAnchors: true,
        indexFormat: 'table',
        categorizeByGroup: false,
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
        useHTMLAnchors: true,
        preserveAnchorCasing: true,
        publicPath: '/some-path',
        fileExtension: 'mdx',
        sanitizeComments: true,
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
      disableSources: true,
    },
    options: [
      { entryFileName: 'index.md' },
      {
        excludeScopesInPaths: true,
        mergeReadme: true,
        includeVersion: true,
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
    only: false,
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
        options: './test/fixtures/typedoc.text-options.cjs',
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
