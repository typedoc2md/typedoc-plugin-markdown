import { PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Templates
 */
export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

  if (!context.getOption('hidePageTitle')) {
    md.push(heading(1, context.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }

  md.push(context.pageTOC(page, 2));

  md.push(context.members(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}
