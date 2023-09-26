import { PluginOptions as TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions extends TypedocPluginMarkdownOptions {
  id: string;
  sidebar: Partial<SidebarOptions>;
}

export interface SidebarOptions {
  autoConfiguration: boolean;
  pretty: boolean;
  filteredIds: string[];
}
