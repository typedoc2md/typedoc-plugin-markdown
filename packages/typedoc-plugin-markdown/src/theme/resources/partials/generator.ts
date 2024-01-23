import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function generator(context: MarkdownThemeRenderContext): string {
  const { horizontalRule } = context.markdown;
  const generatorText =
    'Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org). ';

  return [horizontalRule(), generatorText].join('');
}
