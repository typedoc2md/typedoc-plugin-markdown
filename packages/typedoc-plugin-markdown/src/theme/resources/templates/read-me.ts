import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

export function readmeTemplate(
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

  if (page.model.readme) {
    md.push(context.partials.commentParts(page.model.readme));
  }

  if (!context.options.getValue('hideGenerator')) {
    md.push(context.partials.generator());
  }

  md.push(context.hook('page.end').join('\n'));

  return md.join('\n\n');
}
