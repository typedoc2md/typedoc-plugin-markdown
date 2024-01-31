import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';
import { heading } from '../markdown';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  md.push(context.hook('page.begin').join('\n'));

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.partials.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  const includeReadme =
    context.options.getValue('mergeReadme') && Boolean(page.model.readme);

  if (includeReadme && page.model.readme) {
    md.push(context.partials.commentParts(page.model.readme));
  }

  if (!context.options.getValue('hidePageTitle') && !includeReadme) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  md.push(context.hook('content.begin').join('\n'));

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment, 2));
  }

  md.push(context.partials.pageIndex(page, 2));

  md.push(context.partials.members(page.model, 2));

  md.push(context.hook('page.end').join('\n'));

  return md.join('\n\n');
}
