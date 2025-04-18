import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type {Record<string, import('@devtools/fixtures/models.js').Fixture>}
 */
const config = {
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
      tableColumnSettings: {
        hideSources: true,
        leftAlignHeaders: true,
      },
      excludePrivate: false,
      blockTagsPreserveOrder: ['@deprecated', '@see'],
      expandObjects: false,
    },
    options: [
      {
        includeHierarchySummary: true,
      },
      {
        readme: 'none',
        parametersFormat: 'table',
        classPropertiesFormat: 'table',
        interfacePropertiesFormat: 'table',
        typeDeclarationFormat: 'table',
        enumMembersFormat: 'table',
        propertyMembersFormat: 'table',
        typeAliasPropertiesFormat: 'table',
        indexFormat: 'table',
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
      tableColumnSettings: {
        leftAlignHeaders: true,
      },
      router: 'member',
      blockTagsPreserveOrder: ['@deprecated', '@see'],
    },
    options: [
      {},
      {
        parametersFormat: 'table',
        classPropertiesFormat: 'table',
        interfacePropertiesFormat: 'table',
        typeDeclarationVisibility: 'compact',
        useCodeBlocks: true,
      },
    ],
  },
  modules: {
    only: false,
    entryPoints: [
      '/modules/module-2',
      '/modules/module-1',
      '/modules/module-3',
    ],
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
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
        modulesFileName: 'documentation.md',
      },
    ],
  },
  groups: {
    only: false,
    entryPoints: '/groups/**/*.ts',
    commonOptions: {
      name: 'typedoc-stubs',
      plugin: [
        path.join(__dirname, 'custom-plugins', 'stub-groups-theme.mjs'),
        path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
      ],
      theme: 'stub-groups',
      disableSources: true,
      entryFileName: 'index.md',
      tableColumnSettings: {
        leftAlignHeaders: true,
      },
      readme: './test/fixtures/README.md',
    },
    options: [
      {
        categorizeByGroup: true,
        navigationModel: {
          excludeGroups: true,
        },
        indexFormat: 'table',
      },
      {
        readme: 'none',
        groupOrder: ['Functions', 'Interfaces', '*'],
        useHTMLAnchors: true,
        indexFormat: 'htmlTable',
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
      excludePrivate: false,
      useHTMLAnchors: true,
      anchorPrefix: 'api-',
    },
    options: [
      {
        enumMembersFormat: 'table',
        parametersFormat: 'table',
        propertiesFormat: 'list',
        classPropertiesFormat: 'table',
        propertyMembersFormat: 'table',
        typeDeclarationFormat: 'table',
        typeAliasPropertiesFormat: 'table',
      },
      {
        preserveAnchorCasing: true,
        publicPath: 'https://example.com',
        sanitizeComments: true,
        flattenOutputFiles: true,
        enumMembersFormat: 'htmlTable',
        parametersFormat: 'htmlTable',
        classPropertiesFormat: 'htmlTable',
        interfacePropertiesFormat: 'htmlTable',
        typeAliasPropertiesFormat: 'htmlTable',
        typeDeclarationFormat: 'htmlTable',
        useCodeBlocks: false,
        expandObjects: true,
        tableColumnSettings: {
          hideDefaults: true,
          hideInherited: true,
          hideModifiers: true,
          hideOverrides: true,
          hideSources: true,
          hideValues: true,
          leftAlignHeaders: true,
        },
        blockTagsPreserveOrder: ['@example'],
      },
    ],
  },
  packages: {
    only: false,
    entryPoints: '/packages/*',
    outputFileStrategies: ['members', 'modules'],
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      entryPointStrategy: 'packages',
      name: 'packages-example',
      disableSources: true,
      tableColumnSettings: {
        leftAlignHeaders: true,
      },
    },
    options: [
      {
        entryFileName: 'index.md',
        projectDocuments: ['./test/fixtures/PROJECT_DOC_1.md'],
      },
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
      readme: './test/fixtures/src/packages/package-1/README.md',
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
      { entryFileName: 'README.md', githubPages: true },
      {
        readme: 'none',
        excludeScopesInPaths: true,
        githubPages: false,
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
        includeVersion: true,
        options: './test/fixtures/typedoc.readme.cjs',
      },
    ],
  },
  text: {
    only: false,
    entryPoints: '/text/*.ts',
    commonOptions: {
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
      disableSources: true,
      tableColumnSettings: { leftAlignHeaders: true },
      includeVersion: true,
      propertiesFormat: 'table',
      readme: 'none',
    },
    options: [
      {
        options: './test/fixtures/typedoc.text-1.cjs',
      },
      {
        options: './test/fixtures/typedoc.text-2.cjs',
        indexFormat: 'table',
      },
    ],
  },
  utils: {
    only: false,
    entryPoints: '/utils/*.ts',
    commonOptions: {
      hidePageHeader: true,
      hideBreadcrumbs: true,
      disableSources: true,
      readme: 'none',
      expandObjects: true,
      useHTMLEncodedBrackets: true,
      parametersFormat: 'table',
    },
    options: [
      {},
      {
        useCodeBlocks: true,
        formatWithPrettier: true,
        prettierConfigFile: './test/fixtures/prettier-config/.prettierrc.json',
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
          path.join(__dirname, 'custom-plugins', 'custom-router.mjs'),
          path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs'),
          path.join(__dirname, 'custom-plugins', 'urls-plugin.mjs'),
        ],
        theme: 'custom-theme',
        router: 'custom-router',
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
        indexFormat: 'htmlTable',
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
      projectDocuments: ['./test/fixtures/PROJECT_DOC_1.md'],
      theme: 'stub-documents',
      readme: 'none',
      disableSources: true,
    },
    options: [
      {},
      {
        indexFormat: 'table',
      },
    ],
  },
  navigation: {
    only: false,
    entryPoints: [
      '/navigation/module-1/index.ts',
      '/navigation/module-2/index.ts',
      '/navigation/module-3/index.ts',
    ],
    commonOptions: {
      hidePageHeader: true,
      readme: 'none',
      plugin: [path.join(__dirname, 'custom-plugins', 'navigation-plugin.mjs')],
    },
    options: [
      {
        navigation: {
          includeCategories: false,
          includeGroups: false,
          includeFolders: false,
        },
        categorizeByGroup: true,
      },
      {
        navigation: {
          includeCategories: true,
          includeGroups: true,
          includeFolders: true,
        },
        categorizeByGroup: false,
      },
    ],
  },
  outputs: {
    only: false,
    options: [
      {
        options: './test/fixtures/typedoc.outputs.cjs',
      },
    ],
  },
};

export default config;
