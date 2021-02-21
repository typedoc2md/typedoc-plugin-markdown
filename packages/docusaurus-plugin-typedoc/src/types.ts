export interface PluginOptions {
  id: string;
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions | null;
  readmeTitle?: string;
  globalsTitle?: string;
  plugin: string[];
  readme?: string;
  disableOutputCheck?: boolean;
  entryPoints?: string[];
  entryDocument: string;
  hideInPageTOC: boolean;
  hideBreadcrumbs: boolean;
  siteDir: string;
  outputDirectory: string;
  watch: boolean;
}

export interface FrontMatter {
  id: string;
  title: string;
  slug?: string;
  sidebar_label?: string;
  hide_title?: boolean;
}

export interface SidebarOptions {
  fullNames?: boolean;
  sidebarFile: string;
  sidebarPath: string;
  indexLabel?: string;
  readmeLabel?: string;
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
