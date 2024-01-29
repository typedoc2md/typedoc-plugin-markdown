import { Fixture } from '@devtools/fixtures/models';
import * as path from 'path';

const config: Record<string, Fixture> = {
  reflections: {
    only: false,
    entryPoints: '/reflections/index.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      hideGenerator: true,
      hidePageHeader: true,
      hideBreadcrumbs: true,
    },
    options: [
      { hideParameterTypesInTitle: false },
      {
        readme: 'none',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        typeDeclarationFormat: 'table',
        enumMembersFormat: 'table',
        useCodeBlocks: true,
        expandObjects: true,
        memberPageTitle: '{name}',
        hideParameterTypesInTitle: true,
      },
    ],
  },
  groups: {
    only: false,
    entryPoints: '/groups/**/*.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      disableSources: true,
      hideGenerator: true,
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
      hideGenerator: true,
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
      },
    ],
  },
  packages: {
    entryPoints: '/packages/*',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryPointStrategy: 'packages',
      hideGenerator: true,
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
      hideGenerator: true,
      name: 'packages-example',
      includeVersion: true,
      disableSources: true,
    },
    options: [{}],
  },
  entryFiles: {
    entryPoints: '/entryfiles/*',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryFileName: 'index.md',
      entryModule: 'entry-module',
      hideGenerator: true,
      disableSources: true,
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
        hideGenerator: true,
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
    entryPoints: '/customize/index.ts',
    outputFileStragies: ['members'],
    commonOptions: {
      disableSources: true,
      hideGenerator: true,
      readme: 'none',
      outputFileStrategy: 'modules',
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
