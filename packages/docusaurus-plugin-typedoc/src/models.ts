import { PluginOptions as TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';
import { PluginOptions as DocusaurusOptions } from './types/index.js';

export interface PluginOptions
  extends TypedocPluginMarkdownOptions,
    DocusaurusOptions {
  id: string;
  out: string;
}
