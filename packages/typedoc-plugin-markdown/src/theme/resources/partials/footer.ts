import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function footer(context: MarkdownThemeRenderContext): string {
  if (!context.options.getValue('hideGenerator')) {
    return `***\nGenerated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)`;
  }
  return '';
}
