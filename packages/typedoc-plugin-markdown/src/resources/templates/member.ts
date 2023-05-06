import { DeclarationReflection, PageEvent } from 'typedoc';
import { heading } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hidePageHeader')) {
    md.push(context.partials.pageHeader(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.getOption('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  md.push(context.partials.member(page.model));

  return md.join('\n\n');
}
