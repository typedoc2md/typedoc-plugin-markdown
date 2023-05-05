import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hidePageHeader')) {
    md.push(context.partials.pageHeader(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (page.model.readme) {
    md.push(context.partials.commentParts(page.model.readme));
  }

  return md.join('\n\n');
}
