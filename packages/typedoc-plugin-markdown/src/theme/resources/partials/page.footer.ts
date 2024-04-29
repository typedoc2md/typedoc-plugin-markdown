import { MarkdownThemeContext } from '@plugin/theme';

/**
 * @category Page Partials
 */
export function footer(this: MarkdownThemeContext): string {
  const text = this.getText('footer.text');
  return text ? `***\n\n${text}` : ``;
}
