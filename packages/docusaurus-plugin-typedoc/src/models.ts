import { PluginOptions as TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions extends TypedocPluginMarkdownOptions {
  id: string;
  docsRoot: string;
  sidebar: Partial<SidebarOptions>;
}

export interface SidebarOptions {
  autoConfiguration: boolean;
  readmeLabel: string;
  indexLabel: string;
  categoryLabel: string;
}
