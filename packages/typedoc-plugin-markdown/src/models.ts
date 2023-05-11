import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

/**
 * Defines how entry points are interpreted.
 * @enum
 */
export const OutputFileStrategy = {
  Project: 'project',
  Modules: 'modules',
  Members: 'members',
} as const;

export type OutputFileStrategy =
  (typeof OutputFileStrategy)[keyof typeof OutputFileStrategy];

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  anchorFormat: AnchorFormat;
  baseUrl: string;
  enumMembersFormat: DataFormatStyle;
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
  kindsWithOwnFile: AvailableKindsWithOwnFile[];
  namedAnchors: boolean;
  outputFileStrategy: OutputFileStrategy;
  propertiesFormat: DataFormatStyle;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  kind: ReflectionKind;
}

export type AvailableKindsWithOwnFile =
  | 'None'
  | 'Class'
  | 'Interface'
  | 'Enum'
  | 'Function'
  | 'Variable'
  | 'TypeAlias';

export type Collapse = 'object' | 'function' | 'all' | 'none';

export type DataFormatStyle = 'list' | 'table';

export type AnchorFormat = 'lowercase' | 'slug' | 'none';

export type FrontmatterGlobals =
  | string
  | Record<string, string | boolean | number | null>;

export type FrontmatterNamingConvention =
  | 'camelCase'
  | 'snakeCase'
  | 'kebabCase'
  | 'pascalCase';

export interface NavigationItem {
  title?: string;
  url?: string;
  children?: NavigationItem[];
  isReadme?: boolean;
  isGroup?: boolean;
}
