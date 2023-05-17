import { DeclarationReflection, PageEvent } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { heading } from '../../support/els';

export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
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

  md.push(context.member(page.model, 1));

  md.push(context.footer());

  return md.join('\n\n');
}
