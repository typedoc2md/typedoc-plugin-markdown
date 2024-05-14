import { markdownBlocksToHtml } from './markdown-blocks-to-html';
import { normalizeLineBreaks } from './normalize-line-breaks';

export function formatTableColumn(str: string) {
  // Normalize line breaks
  let md = normalizeLineBreaks(str);
  // If comments are on multiple lines convert markdown block tags to HTML and remove new lines.
  if (md.split('\n').length > 1) {
    md = markdownBlocksToHtml(md);
  }
  // Finally return with escaped pipes
  return md.replace(/\|/g, '\\|');
}
