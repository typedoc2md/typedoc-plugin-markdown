import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  baseUrl: string;
  enableFrontmatter: boolean;
  entryDocument: string;
  enumMembersFormat: 'List' | 'Table';
  flattenOutputFiles: boolean;
  frontmatterTags: string[];
  frontmatterGlobals: FrontmatterGlobals;
  frontmatterNamingConvention: FrontmatterNamingConvention;
  groupByKinds: boolean;
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hideKindTag: boolean;
  hidePageTitle: boolean;
  hideHierarchy: boolean;
  indentifiersAsCodeBlocks: boolean;
  indexPageTitle: string;
  kindsWithOwnFile: string | string[];
  namedAnchors: boolean;
  numberPrefixOutput: boolean;
  propertiesFormat: 'List' | 'Table';
  typeDeclarationFormat: 'List' | 'Table';
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