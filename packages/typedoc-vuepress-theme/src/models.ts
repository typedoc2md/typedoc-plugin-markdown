import { TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions extends TypedocPluginMarkdownOptions {
  sidebar: SidebarOptions;
}

export type SidebarOptions = {
  autoConfiguration: boolean;
  version: 'v1' | 'v2';
};
