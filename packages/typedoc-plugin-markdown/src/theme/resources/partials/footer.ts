import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function footer(context: MarkdownThemeRenderContext): string {
  if (!context.options.getValue('hideGenerator')) {
    return `___\nGenerated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)`;
  }
  return '';
}
