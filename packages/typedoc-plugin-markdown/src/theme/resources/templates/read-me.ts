import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';

/**
 * @category Templates
 */
export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

  if (page.model.readme) {
    md.push(context.commentParts(page.model.readme));
    if (context.options.getValue('mergeReadme')) {
      md.push(getIndexReplacer(context, page));
    }
  }

  md.push(context.footer());

  return md.join('\n\n');
}

function getIndexReplacer(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(context.pageIndex(page, 2));

  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }
  md.push(context.members(page.model, 2));
  return md.join('\n\n');
}
