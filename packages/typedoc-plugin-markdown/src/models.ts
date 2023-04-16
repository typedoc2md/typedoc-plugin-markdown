import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  baseUrl: string;
  enableFrontmatter: boolean;
  entryDocument: string;
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hidePageTitle: boolean;
  hideHierarchy: boolean;
  indexTitle: string;
  flattenOutputFiles: boolean;
  frontmatterTags: string[];
  frontmatterGlobals: FrontmatterGlobals;
  frontmatterNamingConvention: FrontmatterNamingConvention;
  groupByReflections: boolean;
  longTitles: boolean;
  namedAnchors: boolean;
  reflectionsWithOwnFile: string | string[];
  typeDeclarationStyle: 'list' | 'table';
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  isLeaf: boolean;
  kind: ReflectionKind;
}

export type Collapse = 'object' | 'function' | 'all' | 'none';

export type FrontmatterGlobals =
  | string
  | Record<string, string | boolean | number | null>;

export type FrontmatterNamingConvention =
  | 'camelCase'
  | 'snakeCase'
  | 'kebabCase'
  | 'pascalCase';
