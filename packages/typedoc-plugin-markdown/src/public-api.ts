/**
 * The public API of typedoc-plugin-markdown exposes some classes and types that can be used to customize the output of the plugin.
 * If you are interested more generally in the TypeDoc API please visit [https://typedoc.org](https://typedoc.org/api/).
 *
 * @document ../supporting-docs/local-plugins.md
 * @document ../supporting-docs/customizing-output.md
 * @document ../supporting-docs/navigation.md
 *
 * @module
 */

export { MarkdownPageEvent, MarkdownRendererEvent } from '@plugin/events';
export { MarkdownTheme, MarkdownThemeContext } from '@plugin/theme';
export {
  MarkdownRendererHooks,
  NavigationItem,
  PluginOptions,
  UrlMapping,
} from '@plugin/types';
