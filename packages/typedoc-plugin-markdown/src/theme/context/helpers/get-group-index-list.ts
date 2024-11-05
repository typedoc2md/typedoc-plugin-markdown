import { link } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, DocumentReflection } from 'typedoc';

export function getGroupIndexList(
  this: MarkdownThemeContext,
  children: DeclarationReflection[] | DocumentReflection[],
) {
  const filteredChildren =
    children
      .filter((child) => Boolean(child.url))
      .map((child) => {
        return child.url
          ? `- ${link(escapeChars(child.name), this.getRelativeUrl(child.url))}`
          : '';
      }) || [];

  return filteredChildren.join('\n');
}
