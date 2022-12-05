import { TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hidePageTitle: boolean;
  embedHeadingsInCodeBlock: boolean;
  entryDocument: string;
  indexTitle: string;
  namedAnchors: boolean;
  publicPath: string;
  hasOwnDocument: HasOwnDocument[];
}

export interface TemplateMapping {
  directory?: string;
  template: any;
  isLeaf: boolean;
}

export type HasOwnDocument =
  | 'none'
  | 'all'
  | 'class'
  | 'interface'
  | 'enum'
  | 'function'
  | 'variable'
  | 'type';

export type Collapse = 'object' | 'function' | 'all' | 'none';
