import { TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions extends TypedocPluginMarkdownOptions {
  id: string;
  docsRoot: string;
  sidebar: SidebarOptions;
}

export interface SidebarOptions {
  categoryLabel: string;
  collapsed: boolean;
  position: number | null;
  autoConfiguration: boolean;
}

export interface SidebarCategory {
  type: string;
  label: string;
  items: SidebarItem[];
}

export type SidebarItem = SidebarCategory | string;
