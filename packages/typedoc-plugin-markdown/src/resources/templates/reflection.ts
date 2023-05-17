import { DeclarationReflection, PageEvent } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { heading } from '../../support/els';

export function reflectionTemplate(
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

  if (!context.options.getValue('hideKindTag')) {
    md.push(context.memberKindTag(page.model));
  }

  md.push(context.reflectionMember(page.model, 2));

  md.push(context.footer());

  return md.join('\n\n');
}
