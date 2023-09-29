import { MarkdownThemeRenderContext } from '../..';
import { horizontalRule } from '../../../support/elements';

/**
 * @category Partials
 */
export function footer(context: MarkdownThemeRenderContext): string {
  if (!context.options.getValue('hideGenerator')) {
    return `${horizontalRule()}Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)`;
  }
  return '';
}
