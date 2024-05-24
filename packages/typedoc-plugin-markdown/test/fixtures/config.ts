import { Fixture } from '@devtools/fixtures/models';
import * as path from 'path';

const config: Record<string, Fixture> = {
  reflections: {
    only: false,
    entryPoints: '/reflections/index.ts',
    commonOptions: {
      plugin: [
        path.join(__dirname, 'custom-plugins', 'normalize-sources.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      hidePageHeader: true,
      hideBreadcrumbs: true,
      tableColumnVisibility: {
        hideSources: true,
      },
      leftAlignTableHeaders: true,
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
      leftAlignTableHeaders: true,
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
      plugin: [
        path.join(__dirname, 'custom-plugins', 'stub-groups-theme.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      theme: 'stub-groups',
      disableSources: true,
      entryFileName: 'index.md',
      leftAlignTableHeaders: true,
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
        membersWithOwnFile: [
          'Class',
          'Interface',
          'Enum',
          'TypeAlias',
          'Function',
        ],
        hideGroupHeadings: true,
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
      plugin: [
        path.join(__dirname, 'custom-plugins', 'normalize-sources.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      hidePageHeader: true,
      hideBreadcrumbs: true,
      readme: 'none',
      inlineDocuments: true,
    },
    options: [
      {
        enumMembersFormat: 'table',
        parametersFormat: 'table',
        propertiesFormat: 'table',
        typeDeclarationFormat: 'table',
      },
      {
        useHTMLAnchors: true,
        preserveAnchorCasing: true,
        publicPath: 'http://example.com',
        sanitizeComments: true,
        flattenOutputFiles: true,
        enumMembersFormat: 'htmlTable',
        parametersFormat: 'htmlTable',
        propertiesFormat: 'htmlTable',
        typeDeclarationFormat: 'htmlTable',
        tableColumnVisibility: {
          hideDefaults: true,
          hideInherited: true,
          hideModifiers: true,
          hideOverrides: true,
          hideSources: true,
        },
        leftAlignTableHeaders: true,
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
      leftAlignTableHeaders: true,
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
      leftAlignTableHeaders: true,
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
  documents: {
    only: false,
    entryPoints: ['/documents/module-1.ts', '/documents/module-2.ts'],
    commonOptions: {
      hidePageHeader: true,
      plugin: [
        path.join(__dirname, 'custom-plugins', 'stub-documents-theme.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      theme: 'stub-documents',
      readme: 'none',
      disableSources: true,
      projectDocuments: [
        './test/fixtures/PROJECT_DOC_1.md',
        './test/fixtures/docs/project/PROJECT_DOC_2.md',
        './test/fixtures/docs/project/PROJECT_DOC_3.md',
      ],
    },
    options: [
      {},
      {
        indexFormat: 'table',
        flattenOutputFiles: true,
      },
    ],
  },
  documentsSingleModule: {
    only: false,
    entryPoints: ['/documents/module-1.ts'],
    commonOptions: {
      hidePageHeader: true,
      plugin: [
        path.join(__dirname, 'custom-plugins', 'stub-documents-theme.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      theme: 'stub-documents',
      readme: 'none',
      disableSources: true,
      projectDocuments: [
        './test/fixtures/PROJECT_DOC_1.md',
        './test/fixtures/docs/project/PROJECT_DOC_2.md',
        './test/fixtures/docs/project/PROJECT_DOC_3.md',
      ],
    },
    options: [
      {},
      {
        indexFormat: 'table',
        inlineDocuments: true,
      },
    ],
  },
};

export default config;
