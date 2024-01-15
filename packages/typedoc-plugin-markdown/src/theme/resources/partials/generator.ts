import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function generator(context: MarkdownThemeRenderContext): string {
  const { horizontalRule } = context.markdown;
  const generatorText = context.text
    .get('footer.generator')
    ?.replace(/TypeDoc/g, '[TypeDoc](https://typedoc.org)')
    .replace(
      /typedoc-plugin-markdown/g,
      '[typedoc-plugin-markdown](https://typedoc-plugin-markdown.org)',
    );
  return [horizontalRule(), generatorText].join('');
}
