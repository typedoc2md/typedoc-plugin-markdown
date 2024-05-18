// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

/**
 * Describes the options declared by the plugin.
 *
 * @category Options
 */
export interface PluginOptions {
  /**
   * Custom anchor prefix when anchoring to in-page symbols.
   */
  anchorPrefix: string;

  /**
   * The file name of the entry page.
   */
  entryFileName: string;

  /**
   * The name of a module that should act as the root page for the documentation.
   */
  entryModule: string;

  /**
   * Specify the render style of enumeration members.
   */
  enumMembersFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Excludes grouping by kind so all members are rendered and sorted at the same level.
   */
  excludeGroups: boolean;

  /**
   * Exclude writing @ scope directories in paths.
   */
  excludeScopesInPaths: boolean;

  /**
   * Expand objects inside declarations.
   */
  expandObjects: boolean;

  /**
   * Expand parameters in signature parentheses to display type information.
   */
  expandParameters: boolean;

  /**
   * Specify the file extension for generated output files.
   */
  fileExtension: string;

  /**
   * Flatten output files to a single directory.
   */
  flattenOutputFiles: boolean;

  /**
   * Do not print breadcrumbs.
   */
  hideBreadcrumbs: boolean;

  /**
   * Do not print page header.
   */
  hidePageHeader: boolean;

  /**
   * Do not print page title.
   */
  hidePageTitle: boolean;

  /**
   * Specify the render format for index items.
   */
  indexFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Inline documents in pages.
   */
  inlineDocuments: boolean;

  /**
   * Determines which members are exported to their own file when `outputFileStrategy` equals `members`.
   */
  membersWithOwnFile: (
    | 'Enum'
    | 'Variable'
    | 'Function'
    | 'Class'
    | 'Interface'
    | 'TypeAlias'
  )[];

  /**
   * Merges the resolved readme into the project index page.
   */
  mergeReadme: boolean;

  /**
   * Configures how the navigation model will be generated.
   */
  navigationModel: {
    excludeGroups: boolean;
    excludeCategories: boolean;
    excludeFolders: boolean;
  };

  /**
   * Determines how output files are generated.
   */
  outputFileStrategy: 'members' | 'modules';

  /**
   * Specify the render style of parameter and type parameter groups.
   */
  parametersFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Preserve anchor casing when generating link to symbols.
   */
  preserveAnchorCasing: boolean;

  /**
   * Specify the render style of property groups for interfaces and classes.
   */
  propertiesFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Specify the base path for all urls.
   */
  publicPath: string;

  /**
   * Sanitize HTML and JSX inside JsDoc comments.
   */
  sanitizeComments: boolean;

  /**
   * Control header alignment and column visibility in tables.
   */
  tableColumns: {
    excludeDefaultsCol: boolean;
    excludeInheritedFromCol: boolean;
    excludeModifiersCol: boolean;
    excludeOverridesCol: boolean;
    excludeSourcesCol: boolean;
    leftAlignHeadings: boolean;
  };

  /**
   * Provides a mechanism to change the content of text used in documentation.
   */
  textContentMappings: Partial<TextContentMappings>;

  /**
   * Specify the render style for type declaration members.
   */
  typeDeclarationFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Wraps signatures and declarations in code blocks.
   */
  useCodeBlocks: boolean;

  /**
   * Add HTML named anchors to headings and table rows.
   */
  useHTMLAnchors: boolean;
}

/**
 * Describes the keys available to replace static text.
 *
 * @category Options
 */
export interface TextContentMappings {}
