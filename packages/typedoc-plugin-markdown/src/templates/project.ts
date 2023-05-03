import { PageEvent, ProjectReflection } from 'typedoc';
import { heading } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.getOption('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment, 2));
  }

  md.push(context.partials.toc(page.model));

  md.push(context.partials.members(page.model));

  return md.join('\n\n');
}
