import { TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hidePageTitle: boolean;
  entryDocument: string;
  indexTitle: string;
  namedAnchors: boolean;
  publicPath: string;
  hasOwnFile: string | string[];
  typeDeclarationStyle: 'list' | 'table';
}

export interface TemplateMapping {
  directory: string;
  template: any;
  isLeaf: boolean;
}

export type Collapse = 'object' | 'function' | 'all' | 'none';
