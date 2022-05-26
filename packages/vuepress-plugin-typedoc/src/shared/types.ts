import { TypeDocOptions } from 'typedoc';

export interface PluginOptions extends TypeDocOptions {
  sidebar?: SidebarOptions;
  hideBreadcrumbs?: boolean;
  hideInPageTOC?: boolean;
}

export interface SidebarOptions {
  fullNames: boolean;
  parentCategory: string;
  autoConfiguration: boolean;
}
