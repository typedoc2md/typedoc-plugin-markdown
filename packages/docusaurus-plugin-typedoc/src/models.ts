import { PluginOptions as TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';
import { PluginOptions as DocusaurusOptions } from './options/types';

export interface PluginOptions
  extends TypedocPluginMarkdownOptions,
    DocusaurusOptions {
  id: string;
}
