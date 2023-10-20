import * as path from 'path';
import { Fixture } from './models';

export enum FixtureOutputFileStrategy {
  Modules = 'modules',
  Members = 'members',
}

export enum FixtureEntryPoints {
  Reflections = '/src/reflections/index.ts',
  Packages = '/src/packages/*',
  Groups = '/src/groups/**/*.ts',
  Comments = '/src/comments/index.ts',
}

export enum FixtureOutputDir {
  Reflections = 'reflections',
  Packages = 'packages',
  Groups = 'groups',
  Comments = 'comments',
}

export const FIXTURES: Fixture[] = [
  {
    outDir: FixtureOutputDir.Reflections,
    entryPoints: FixtureEntryPoints.Reflections,
    commonOptions: {},
    options: [
      { hideGenerator: true },
      {
        disableSources: true,
        entryFileName: 'index.md',
        readme: 'none',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        typeDeclarationFormat: 'table',
        enumMembersFormat: 'table',
        useCodeBlocks: true,
        expandObjects: true,
        titleTemplate: '{name}',
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
        hidePageHeader: true,
        hideBreadcrumbs: true,
        entryFileName: 'index.md',
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
      },
    ],
  },
  {
    outDir: FixtureOutputDir.Packages,
    entryPoints: FixtureEntryPoints.Packages,
    commonOptions: {
      entryPointStrategy: 'packages',
      hideGenerator: true,
    },
    options: [{}],
  },
];
