import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownHooks, MarkdownPageEvent } from '../../..';
import { heading } from '../markdown';

export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(context.hook(MarkdownHooks.PAGE_BEGIN).join('\n'));

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.partials.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  md.push(context.hook(MarkdownHooks.CONTENT_BEGIN).join('\n'));

  md.push(context.partials.reflectionMember(page.model, 2));

  md.push(context.hook(MarkdownHooks.PAGE_END).join('\n'));

  return md.join('\n\n');
}
