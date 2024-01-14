import { MarkdownThemeRenderContext } from '../..';
import { horizontalRule } from '../../../support/elements';

/**
 * @category Partials
 */
export function footer(context: MarkdownThemeRenderContext): string {
  if (!context.options.getValue('hideGenerator')) {
    const generatorText = context
      .getTextContent('footer.generator')
      ?.replace(/TypeDoc/g, '[TypeDoc](https://typedoc.org)')
      .replace(
        /typedoc-plugin-markdown/g,
        '[typedoc-plugin-markdown](https://typedoc-plugin-markdown.org)',
      );
    return [horizontalRule(), generatorText].join('');
  }
  return '';
}
