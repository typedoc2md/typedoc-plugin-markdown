import { DeclarationReflection, PageEvent } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Templates
 */
export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
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

  md.push(context.member(page.model, 1));

  md.push(context.footer());

  return md.join('\n\n');
}
