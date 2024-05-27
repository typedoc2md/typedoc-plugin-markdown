import { link } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'public-api';
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
