import { MarkdownPageEvent } from '@plugin/events/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { CommentDisplayPart, ProjectReflection } from 'typedoc';

export function index(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  // The separate README page fires the generic page hooks; "index.page.*"
  // stays on the project page rendered by the reflection template.
  md.push(this.hook('page.begin', this).join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  md.push(this.hook('content.begin', this).join('\n'));

  if (page.model.readme) {
    md.push(
      this.helpers.getCommentParts(page.model.readme as CommentDisplayPart[]),
    );
  }

  if (this.options.getValue('mergeReadme')) {
    md.push(this.partials.body(page.model, { headingLevel: 2 }));
  }

  md.push(this.hook('content.end', this).join('\n'));

  md.push(this.partials.footer());

  md.push(this.hook('page.end', this).join('\n'));

  return md.join('\n\n');
}
