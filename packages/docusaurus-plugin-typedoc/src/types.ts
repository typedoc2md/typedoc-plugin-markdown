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
  cleanOutputDir?: boolean;
  entryPoints?: string[];
  watch: boolean;
  hideInPageTOC: boolean;
  hideBreadcrumbs: boolean;
  hidePageTitle: boolean;
  entryDocument: string;
  includeExtension?: boolean;
  theme?: string;
  enableFrontmatter: boolean;
}

export type FrontMatter =
  | Record<string, string | boolean | number | null>
  | undefined;

export interface SidebarOptions {
  fullNames?: boolean;
  categoryLabel: string;
  collapsed: boolean;
  indexLabel?: string;
  position: number | null;
  autoConfiguration: boolean;
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export type SidebarItem = SidebarCategory | string;
