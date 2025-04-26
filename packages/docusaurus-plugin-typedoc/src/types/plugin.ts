import { PluginOptions as TypedocDocusaurusThemeOptions } from 'typedoc-docusaurus-theme';
import { PluginOptions as TypedocPluginMarkdownOptions } from 'typedoc-plugin-markdown';

export interface PluginOptions
  extends TypedocPluginMarkdownOptions,
    TypedocDocusaurusThemeOptions {}
