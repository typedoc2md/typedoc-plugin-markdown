export interface PluginOptions {
  id: string;
  docsRoot: string;
  out: string;
  sidebar: SidebarOptions;
  readmeTitle?: string;
  globalsTitle?: string;
  plugin: string[];
  readme?: string;
  disableOutputCheck?: boolean;
  entryPoints?: string[];
  watch: boolean;
  hideInPageTOC: boolean;
  hideBreadcrumbs: boolean;
  hidePageTitle: boolean;
  entryDocument: string;
  includeExtension?: boolean;
  indexSlug?: string;
  theme?: string;
}

export interface FrontMatter {
  id: string;
  title: string;
  slug?: string;
  sidebar_label?: string;
  sidebar_position?: number;
  hide_title?: boolean;
  hide_table_of_contents?: boolean;
}

export interface SidebarOptions {
  fullNames?: boolean;
  categoryLabel: string;
  indexLabel?: string;
  readmeLabel?: string;
  position: number | null;
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export type SidebarItem = SidebarCategory | string;
