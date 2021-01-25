export interface PluginOptions {
  id: string;
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions | null;
  readmeTitle: string | undefined;
  globalsTitle?: string | undefined;
  plugin?: string[];
  readme?: string;
  disableOutputCheck?: boolean;
  entryPoints?: any;
  entryDocument: string;
  hideInPageTOC: boolean;
  hideBreadcrumbs: boolean;
  siteDir?: string;
}

export interface FrontMatter {
  id: string;
  title: string;
  slug?: string;
  sidebar_label?: string;
  hide_title?: boolean;
}

export interface SidebarOptions {
  fullNames: boolean;
  sidebarFile: string;
  indexLabel?: string;
  readmeLabel: string;
}

export interface Sidebar {
  [sidebarId: string]: SidebarItem[];
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export type SidebarItem = SidebarCategory | string;
