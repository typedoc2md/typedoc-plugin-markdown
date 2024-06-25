import { MarkdownPageEvent } from '@plugin/events';
import { MarkdownThemeContext } from 'theme';
import { DocumentReflection } from 'typedoc';

/**
 * Template that maps to a project document.
 */
export function document(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<DocumentReflection>,
) {
  const md: string[] = [];

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  md.push(this.helpers.getCommentParts(page.model.content));

  md.push(this.partials.footer());

  return md.join('\n\n');
}
