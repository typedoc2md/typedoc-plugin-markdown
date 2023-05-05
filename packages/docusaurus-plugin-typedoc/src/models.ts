import { TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions extends TypedocPluginMarkdownOptions {
  id: string;
  docsRoot: string;
  sidebar: SidebarOptions;
}

export interface SidebarOptions {
  categoryLabel: string;
  position: number | null;
  autoConfiguration: boolean;
  indexLabel: string;
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export interface CategoryYamlOptions {
  path: string;
  label: string;
  position: number | null;
  collapsed: boolean;
}

export type SidebarItem = SidebarCategory | string;
