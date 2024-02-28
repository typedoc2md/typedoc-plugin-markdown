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
      useCodeBlocks: true,
    },
    options: [
      {},
      {
        parametersFormat: 'table',
        propertiesFormat: 'table',
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
      },
      {
        readme: 'none',
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
        useMDXFileExt: true,
      },
    ],
  },
  packages: {
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
      { mergeReadme: true, includeVersion: true, indexPageTitle: 'API' },
    ],
  },
  package: {
    entryPoints: '/packages/package-1',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryPointStrategy: 'packages',
      name: 'packages-example',
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
      useMDXFileExt: true,
    },
    options: [{ entryFileName: 'README.md' }, { readme: 'none' }],
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
