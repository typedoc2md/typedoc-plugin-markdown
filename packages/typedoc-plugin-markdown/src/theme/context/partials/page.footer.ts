import { MarkdownThemeContext } from '@plugin/theme/index.js';

export function footer(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');
  const text = textContentMappings?.['footer.text'];
  return text ? `***\n\n${text}` : ``;
}
