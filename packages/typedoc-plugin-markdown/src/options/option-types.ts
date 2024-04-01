// THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.

import { ManuallyValidatedOption } from 'typedoc';

declare module 'typedoc' {
  export interface TypeDocOptionMap {
    outputFileStrategy: 'members' | 'modules';
    membersWithOwnFile: (
      | 'Enum'
      | 'Variable'
      | 'Function'
      | 'Class'
      | 'Interface'
      | 'TypeAlias'
    )[];
    entryFileName: string;
    fileExtension: string;
    entryModule: string;
    mergeReadme: boolean;
    flattenOutputFiles: boolean;
    excludeScopesInPaths: boolean;
    hidePageHeader: boolean;
    hidePageTitle: boolean;
    hideBreadcrumbs: boolean;
    hideInPageTOC: boolean;
    indexPageTitle: string;
    memberPageTitle: string;
    excludeGroups: boolean;
    useCodeBlocks: boolean;
    expandObjects: boolean;
    expandParameters: boolean;
    parametersFormat: 'list' | 'table';
    propertiesFormat: 'list' | 'table';
    enumMembersFormat: 'list' | 'table';
    typeDeclarationFormat: 'list' | 'table';
    indexFormat: 'list' | 'table';
    textContentMappings: ManuallyValidatedOption<Partial<TextContentMappings>>;
    publicPath: string;
    preserveMarkup: boolean;
    preserveAnchorCasing: boolean;
    anchorPrefix: string;
    namedAnchors: boolean;
  }
}

/**
 * Describes the options declared by the plugin.
 *
 * @category Options
 */
export interface PluginOptions {
  /**
   * Determines how output files are generated.
   */
  outputFileStrategy: 'members' | 'modules';

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
   * The file name of the entry page.
   */
  entryFileName: string;

  /**
   * Specify the file extension for generated output files.
   */
  fileExtension: string;

  /**
   * The name of a module that should act as the root page for the documentation.
   */
  entryModule: string;

  /**
   * Merges the resolved readme into the project index page.
   */
  mergeReadme: boolean;

  /**
   * Flatten output files to a single directory.
   */
  flattenOutputFiles: boolean;

  /**
   * Exclude writing @ scope directories in paths.
   */
  excludeScopesInPaths: boolean;

  /**
   * Do not print page header.
   */
  hidePageHeader: boolean;

  /**
   * Do not print page title.
   */
  hidePageTitle: boolean;

  /**
   * Do not print breadcrumbs.
   */
  hideBreadcrumbs: boolean;

  /**
   * Do not render in-page TOC items.
   */
  hideInPageTOC: boolean;

  /**
   * The title of project index page.
   */
  indexPageTitle: string;

  /**
   * The page title of member pages.
   */
  memberPageTitle: string;

  /**
   * Excludes grouping by kind so all members are rendered and sorted at the same level.
   */
  excludeGroups: boolean;

  /**
   * Wraps signatures and declarations in code blocks.
   */
  useCodeBlocks: boolean;

  /**
   * Expand objects inside declarations.
   */
  expandObjects: boolean;

  /**
   * Expand parameters in signature parentheses to display type information.
   */
  expandParameters: boolean;

  /**
   * Specify the render style of parameter and type parameter groups.
   */
  parametersFormat: 'list' | 'table';

  /**
   * Specify the render style of property groups for interfaces and classes.
   */
  propertiesFormat: 'list' | 'table';

  /**
   * Specify the render style of enumuration members.
   */
  enumMembersFormat: 'list' | 'table';

  /**
   * Specify the render style for type declaration members.
   */
  typeDeclarationFormat: 'list' | 'table';

  /**
   * Specify the render format for index items.
   */
  indexFormat: 'list' | 'table';

  /**
   * Provides a mechanism to change the content of text used in documentation.
   */
  textContentMappings: Partial<TextContentMappings>;

  /**
   * Specify the base path for all urls.
   */
  publicPath: string;

  /**
   * Preserves non-html markup tags in comments.
   */
  preserveMarkup: boolean;

  /**
   * Preserve anchor casing when generating link to symbols.
   */
  preserveAnchorCasing: boolean;

  /**
   * Custom anchor prefix
   */
  anchorPrefix: string;

  /**
   * Add HTML named anchors to headings and table rows.
   */
  namedAnchors: boolean;
}

/**
 * Describes the keys available to replace static text.
 *
 * @category Options
 */
export interface TextContentMappings {
  'header.title': string;
  'header.readme': string;
  'header.docs': string;
  'breadcrumbs.home': string;
  'title.indexPage': string;
  'title.modulePage': string;
  'title.memberPage': string;
  'label.defaultValue': string;
  'label.description': string;
  'label.extendedBy': string;
  'label.extends': string;
  'label.flags': string;
  'label.globals': string;
  'label.implements': string;
  'label.implementationOf': string;
  'label.inheritedFrom': string;
  'label.index': string;
  'label.indexable': string;
  'label.indexSignature': string;
  'label.member': string;
  'label.modifier': string;
  'label.name': string;
  'label.overrides': string;
  'label.packages': string;
  'label.reExports': string;
  'label.renamesAndReExports': string;
  'label.returns': string;
  'label.source': string;
  'label.type': string;
  'label.typeDeclaration': string;
  'label.value': string;
  'kind.accessor.singular': string;
  'kind.accessor.plural': string;
  'kind.class.singular': string;
  'kind.class.plural': string;
  'kind.constructor.singular': string;
  'kind.constructor.plural': string;
  'kind.enum.singular': string;
  'kind.enum.plural': string;
  'kind.enumMember.singular': string;
  'kind.enumMember.plural': string;
  'kind.event.singular': string;
  'kind.event.plural': string;
  'kind.function.singular': string;
  'kind.function.plural': string;
  'kind.interface.singular': string;
  'kind.interface.plural': string;
  'kind.method.singular': string;
  'kind.method.plural': string;
  'kind.module.singular': string;
  'kind.module.plural': string;
  'kind.namespace.singular': string;
  'kind.namespace.plural': string;
  'kind.variable.singular': string;
  'kind.variable.plural': string;
  'kind.parameter.singular': string;
  'kind.parameter.plural': string;
  'kind.property.singular': string;
  'kind.property.plural': string;
  'kind.reference.singular': string;
  'kind.reference.plural': string;
  'kind.typeAlias.singular': string;
  'kind.typeAlias.plural': string;
  'kind.typeParameter.singular': string;
  'kind.typeParameter.plural': string;
}
