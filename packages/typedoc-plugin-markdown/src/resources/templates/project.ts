import { PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { heading } from '../../support/els';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.breadcrumbs(page));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(1, context.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }

  md.push(context.pageIndex(page, 2));

  md.push(context.members(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}
