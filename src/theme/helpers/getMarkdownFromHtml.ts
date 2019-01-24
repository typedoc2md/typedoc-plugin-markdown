const TurndownService = require('turndown');
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});

/**
 * Coverts html to markdown. We need this in comment blocks that have been processed by the 'Marked' plugin.
 * @param options
 */
export function getMarkdownFromHtml(options: any) {
  return turndownService.turndown(options.fn(this)).replace(/\\`\\`\\`/g, '```').replace(/[|]/g, '\\|');
}
