import { MarkdownThemeRenderContext } from '../..';
import { horizontalRule } from '../markdown';

export function generator(context: MarkdownThemeRenderContext): string {
  const footer = context.getText('footer.generator');
  if(!footer) {
    return '';
  }

  return [horizontalRule(), footer].join('');
}
