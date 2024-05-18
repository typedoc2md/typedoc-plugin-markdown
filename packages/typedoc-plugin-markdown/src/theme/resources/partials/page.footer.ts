import { MarkdownThemeContext } from '@plugin/theme';

/**
 * @category Page Partials
 */
export function footer(this: MarkdownThemeContext): string {
  const text = this.i18n.theme_footer_text();
  return text ? `***\n\n${text}` : ``;
}
