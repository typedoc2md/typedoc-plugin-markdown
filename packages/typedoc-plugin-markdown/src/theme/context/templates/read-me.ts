import { MarkdownPageEvent } from 'app/events';
import { MarkdownThemeContext } from 'theme';
import { CommentDisplayPart, ProjectReflection } from 'typedoc';

/**
 * Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.
 */
export function readme(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  if (Boolean(page.model.readme)) {
    md.push(
      this.partials.commentParts(page.model.readme as CommentDisplayPart[]),
    );
  }

  md.push(this.partials.footer());

  return md.join('\n\n');
}
