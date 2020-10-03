export interface PluginOptions {
  inputFiles: string[];
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions | null;
  plugin: string[];
  disableOutputCheck?: boolean;
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

export interface LoadedContent {
  navigation: any;
}
