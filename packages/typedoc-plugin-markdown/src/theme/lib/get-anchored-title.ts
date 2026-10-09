import type { MarkdownThemeContext } from '@plugin/theme/index.js';

/**
 * Applies the anchor options to a heading title:
 *
 * - `useHTMLAnchors`: returns an `<a id>` tag to place before the heading.
 * - `useCustomAnchors`: appends the anchor to the title in the configured
 *   `customAnchorsFormat`.
 *
 * Without an anchor the title is returned unchanged.
 */
export function getAnchoredTitle(
  context: MarkdownThemeContext,
  title: string,
  anchor: string | undefined,
): { htmlAnchor?: string; title: string } {
  if (!anchor) {
    return { title };
  }

  const htmlAnchor = context.options.getValue('useHTMLAnchors')
    ? `<a id="${anchor}"></a>`
    : undefined;

  if (!context.options.getValue('useCustomAnchors')) {
    return { htmlAnchor, title };
  }

  const customAnchorsFormat = context.options.getValue('customAnchorsFormat');

  if (customAnchorsFormat === 'curlyBrace') {
    return { htmlAnchor, title: `${title} {#${anchor}}` };
  }
  if (customAnchorsFormat === 'escapedCurlyBrace') {
    return { htmlAnchor, title: `${title} \\{#${anchor}\\}` };
  }
  if (customAnchorsFormat === 'squareBracket') {
    return { htmlAnchor, title: `${title} [#${anchor}]` };
  }
  throw new Error(`Invalid custom anchors format`);
}
