export interface PluginOptions {
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions | null;
  readmeTitle: string | undefined;
  globalsTitle: string | undefined;
  plugin?: string[];
  disableOutputCheck?: boolean;
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
  globalsLabel: string;
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
