import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { heading } from '../../../support/elements';

/**
 * @category Templates
 */
export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  const includeReadme =
    context.options.getValue('mergeReadme') && page.model.readme;

  const headingLevel = includeReadme ? 2 : 1;

  if (includeReadme && page.model.readme) {
    md.push(context.commentParts(page.model.readme));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(headingLevel, context.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.comment(page.model.comment, headingLevel + 1));
  }

  md.push(context.pageIndex(page, headingLevel + 1));

  md.push(context.members(page.model, headingLevel + 1));

  md.push(context.footer());

  return md.join('\n\n');
}
