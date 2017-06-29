import * as toMarkdown from 'to-markdown';

/**
 * Coverts html to markdown. We need this in comment blocks that have been processed by the 'Marked' plugin.
 * @param options
 */
export function getMarkdownFromHtml(options: any) {
  return toMarkdown(options.fn(this));
}
