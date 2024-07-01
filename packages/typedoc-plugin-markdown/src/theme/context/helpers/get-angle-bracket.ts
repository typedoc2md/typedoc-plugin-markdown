import { MarkdownThemeContext } from '@plugin/theme';

export function getAngleBracket(
  this: MarkdownThemeContext,
  bracket: '<' | '>',
): string {
  const useEntities = this.options.getValue('useHTMLEncodedBrackets');
  if (bracket === '<') {
    return useEntities ? '&lt;' : '\\<';
  }
  return useEntities ? '&gt;' : '\\>';
}
