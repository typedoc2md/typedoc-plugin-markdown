import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

/**
 * Defines outputFileStrategy options
 * @enum
 */
export const OutputFileStrategy = {
  Modules: 'modules',
  Members: 'members',
} as const;

export type OutputFileStrategy =
  (typeof OutputFileStrategy)[keyof typeof OutputFileStrategy];

/**
 * Defines format style options
 * @enum
 */
export const FormatStyle = {
  List: 'list',
  Table: 'table',
} as const;

export type FormatStyle = (typeof FormatStyle)[keyof typeof FormatStyle];

/**
 * Defines format style options
 * @enum
 */
export const AnchorFormat = {
  Lowercase: 'lowercase',
  Slug: 'slug',
  None: 'none',
} as const;

export type AnchorFormat = (typeof AnchorFormat)[keyof typeof AnchorFormat];

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  anchorFormat: AnchorFormat;
  baseUrl: string;
  entryDocument: string;
  enumMembersFormat: FormatStyle;
  excludeGroups: boolean;
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hideKindTag: boolean;
  hidePageHeader: boolean;
  hidePageTitle: boolean;
  hideHierarchy: boolean;
  includeFileNumberPrefixes: boolean;
  indentifiersAsCodeBlocks: boolean;
  indexPageTitle: string;
  namedAnchors: boolean;
  outputFileStrategy: OutputFileStrategy;
  propertiesFormat: FormatStyle;
  typeDeclarationFormat: FormatStyle;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}

export type Collapse = 'object' | 'function' | 'all' | 'none';

export type FrontmatterGlobals =
  | string
  | Record<string, string | boolean | number | null>;

export interface NavigationItem {
  title?: string;
  url?: string;
  children?: NavigationItem[];
  isReadme?: boolean;
  isGroup?: boolean;
}
