import * as toMarkdown from 'to-markdown';

export function htmlToMarkdown(options: any) {
  return toMarkdown(options.fn(this));
}
