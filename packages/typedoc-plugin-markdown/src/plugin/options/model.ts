/**
 * THIS FILE IS AUTO GENERATED FROM THE OPTIONS CONFIG. DO NOT EDIT DIRECTLY.
 */
import { TypeDocOptions } from 'typedoc';

export interface PluginOptions extends TypeDocOptions {
  /**
   * Determines how output files are generated.
   */
  outputFileStrategy: 'members' | 'modules';
  /**
   * Prefixes generated files and folders with number prefixes.
   */
  includeFileNumberPrefixes: boolean;
  /**
   * Flatten output files without folders.
   */
  flattenOutputFiles: boolean;
  /**
   * The file name of the entry page.
   */
  entryFileName: string;
  /**
   * The file name the seperate index page.
   */
  indexFileName: string;
  /**
   * The title of API index page.
   */
  indexPageTitle: string;
  /**
   * Skips generation of a seperate API index page.
   */
  skipIndexPage: boolean;
  /**
   * Excludes grouping by reflection kind so all members are rendered and sorted at the same level.
   */
  excludeGroups: boolean;
  /**
   * Do not print page header.
   */
  hidePageHeader: boolean;
  /**
   * Do not print page title.
   */
  hidePageTitle: boolean;
  /**
   * Do not print the kind label as a title prefix.
   */
  hideKindPrefix: boolean;
  /**
   * Do not print breadcrumbs.
   */
  hideBreadcrumbs: boolean;
  /**
   * Do not render in-page table of contents items.
   */
  hideInPageTOC: boolean;
  /**
   * Do not print reflection hierarchy.
   */
  hideHierarchy: boolean;
  /**
   * Format signature and declaration identifiers in code blocks.
   */
  identifiersAsCodeBlocks: boolean;
  /**
   * Specify the render style of properties groups for interfaces and classes.
   */
  propertiesFormat: 'list' | 'table';
  /**
   * Specify the render style of Enum members.
   */
  enumMembersFormat: 'list' | 'table';
  /**
   * Specify the render style for type declaration members.
   */
  typeDeclarationFormat: 'list' | 'table';
  /**
   * Render TOC either as a simple list or a table with a description.
   */
  tocFormat: 'list' | 'table';
  /**
   * Specifies the base url for internal link. If omitted all urls will be relative.
   */
  baseUrl: string;
  /**
   * The anchor format to use when linking to internal symbols.
   */
  anchorFormat: 'lowercase' | 'slug' | 'none';
  /**
   * The anchor pattern to use when linking to internal symbols.
   */
  anchorPattern: string;
  /**
   * Use HTML named anchors for engines that do not automatically assign header ids.
   */
  namedAnchors: boolean;
}
