import { MarkdownPageEvent } from '@plugin/events/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DocumentReflection } from 'typedoc';

export function document(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<DocumentReflection>,
) {
  const md: string[] = [];

  md.push(this.hook('page.begin', this).join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  md.push(this.hook('content.begin', this).join('\n'));

  md.push(this.helpers.getCommentParts(page.model.content));

  md.push(this.hook('content.end', this).join('\n'));

  md.push(this.partials.footer());

  md.push(this.hook('page.end', this).join('\n'));

  return md.join('\n\n');
}
