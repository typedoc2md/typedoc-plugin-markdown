/*
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY
 */
/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
  /**
   * Custom anchor prefix when anchoring to in-page symbols.
   */
  anchorPrefix: string;

  /**
   * Specifies comment block tags that should preserve their position in relation to the comment summary.
   */
  blockTagsPreserveOrder: string[];

  /**
   * Sets the format of property groups for classes.
   */
  classPropertiesFormat: 'list' | 'table' | 'htmlTable';

  /**
   * The file name of the entry page.
   */
  entryFileName: string;

  /**
   * The name of a module that should act as the root page for the documentation.
   */
  entryModule: string;

  /**
   * Sets the format of enumeration members.
   */
  enumMembersFormat: 'list' | 'table' | 'htmlTable';

  /**
   * @deprecated This option has been renamed hideGroupHeadings to better reflect its purpose.
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
   * Excludes grouping by kind so all members are rendered and sorted at the same level.
   */
  hideGroupHeadings: boolean;

  /**
   * Do not print page header.
   */
  hidePageHeader: boolean;

  /**
   * Do not print page title.
   */
  hidePageTitle: boolean;

  /**
   * Sets the format of index items.
   */
  indexFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Sets the format of property groups for interfaces.
   */
  interfacePropertiesFormat: 'list' | 'table' | 'htmlTable';

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
   * Sets the format of parameter and type parameter groups.
   */
  parametersFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Preserve anchor casing when generating link to symbols.
   */
  preserveAnchorCasing: boolean;

  /**
   * Sets the format of property groups for interfaces and classes.
   */
  propertiesFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Sets the format of style for property members for interfaces and classes.
   */
  propertyMembersFormat: 'list' | 'table' | 'htmlTable';

  /**
   * Specify the base path for all urls.
   */
  publicPath: string;

  /**
   * Sanitize HTML and JSX inside JsDoc comments.
   */
  sanitizeComments: boolean;

  /**
   * Control how table columns are configured and displayed.
   */
  tableColumnSettings: {
    hideDefaults: boolean;
    hideInherited: boolean;
    hideModifiers: boolean;
    hideOverrides: boolean;
    hideSources: boolean;
    hideValues: boolean;
    leftAlignHeaders: boolean;
  };

  /**
   * Change specific text placeholders in the template.
   */
  textContentMappings: {
    'header.title': string;
    'header.docs': string;
    'breadcrumbs.home': string;
    'title.indexPage': string;
    'title.memberPage': string;
    'footer.text': string;
  };

  /**
   * Sets the format of style for type declaration members.
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

  /**
   * Use HTML encoded entities for angle brackets.
   */
  useHTMLEncodedBrackets: boolean;
}
