import { MarkdownThemeRenderContext } from '../..';
import { horizontalRule } from '../markdown';

export function generator(context: MarkdownThemeRenderContext): string {
  const generatorText =
    'Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org). ';

  return [horizontalRule(), generatorText].join('');
}
