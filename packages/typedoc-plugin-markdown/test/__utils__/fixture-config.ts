import * as path from 'path';
import { Fixture } from './models';

export enum FixtureOutputFileStrategy {
  Modules = 'modules',
  Members = 'members',
}

export enum FixtureEntryPoints {
  Reflections = '/src/reflections/index.ts',
  Packages = '/src/packages/*',
  Package = '/src/packages/package-1',
  Groups = '/src/groups/**/*.ts',
  Comments = '/src/comments/index.ts',
  EntryFiles = '/src/entryfiles/*',
  Readme = '/src/readme/index.ts',
}

export enum FixtureOutputDir {
  Reflections = 'reflections',
  Packages = 'packages',
  Package = 'package',
  Groups = 'groups',
  Comments = 'comments',
  EntryFiles = 'entryfiles',
  Readme = 'readme',
}

export const FIXTURES: Fixture[] = [
  {
    outDir: FixtureOutputDir.Reflections,
    entryPoints: FixtureEntryPoints.Reflections,
    commonOptions: { hideGenerator: true, hideBreadcrumbs: true },
    options: [
      {},
      {
        disableSources: true,
        readme: 'none',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        typeDeclarationFormat: 'table',
        enumMembersFormat: 'table',
        useCodeBlocks: true,
        expandObjects: true,
        memberPageTitle: '{name}',
      },
    ],
  },
  {
    outDir: FixtureOutputDir.Groups,
    entryPoints: FixtureEntryPoints.Groups,
    commonOptions: {
      disableSources: true,
      hideGenerator: true,
    },
    options: [
      {
        categorizeByGroup: true,
        includeVersion: true,
        titleLink: 'http://www.google.com',
        indexPageTitle: 'Custom Title',
      },
      {
        readme: 'none',
        categorizeByGroup: false,
        disableSources: true,
        excludeGroups: true,
        namedAnchors: {
          headings: true,
        },
        membersWithOwnFile: ['Class', 'Interface', 'Enum'],
        plugin: [path.join(__dirname, '..', 'custom-plugins', 'custom-theme')],
        theme: 'custom-theme',
        indexFormat: 'table',
        hideInPageTOC: true,
        publicPath: 'http://public-path',
      },
    ],
  },
  {
    outDir: FixtureOutputDir.Comments,
    entryPoints: FixtureEntryPoints.Comments,
    commonOptions: {
      disableSources: true,
      hidePageHeader: true,
      hideBreadcrumbs: true,
      hideGenerator: true,
      enumMembersFormat: 'table',
      propertiesFormat: 'table',
    },
    options: [
      {},
      {
        indexFormat: 'table',
        disableSources: true,
        namedAnchors: {
          tableRows: true,
        },
        publicPath: 'http://public-path',
      },
    ],
  },
  {
    outDir: FixtureOutputDir.Packages,
    entryPoints: FixtureEntryPoints.Packages,
    commonOptions: {
      entryPointStrategy: 'packages',
      hideGenerator: true,
      name: 'packages-example',
      hideInPageTOC: true,
    },
    options: [
      {},
      { mergeReadme: true, includeVersion: true, indexPageTitle: 'API' },
    ],
  },
  {
    outDir: FixtureOutputDir.Package,
    entryPoints: FixtureEntryPoints.Package,
    commonOptions: {
      entryPointStrategy: 'packages',
      hideGenerator: true,
      name: 'packages-example',
      includeVersion: true,
      hideInPageTOC: true,
    },
    options: [{}],
  },
  {
    outDir: FixtureOutputDir.EntryFiles,
    entryPoints: FixtureEntryPoints.EntryFiles,
    commonOptions: { entryModule: 'entry-module', hideGenerator: true },
    options: [{ entryFileName: 'README.md' }, { readme: 'none' }],
  },
  {
    outDir: FixtureOutputDir.Readme,
    entryPoints: FixtureEntryPoints.Readme,
    commonOptions: {},
    options: [{ disableSources: true, hideGenerator: true, mergeReadme: true }],
  },
];
