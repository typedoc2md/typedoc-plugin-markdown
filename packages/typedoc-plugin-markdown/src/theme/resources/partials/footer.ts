import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function footer(context: MarkdownThemeRenderContext): string {
  if (!context.getOption('hideGenerator')) {
    return `___\nGenerated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)`;
  }
  return '';
}
