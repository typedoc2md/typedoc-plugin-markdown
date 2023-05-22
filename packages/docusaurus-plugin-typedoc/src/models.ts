export interface PluginOptions {
  id: string;
  docsRoot: string;
  sidebar: SidebarOptions;
}

export interface SidebarOptions {
  autoConfiguration: boolean;
  readmeLabel: string;
  indexLabel: string;
  categoryLabel: string;
}
