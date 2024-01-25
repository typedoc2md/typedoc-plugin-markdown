import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

/**
 * Function that renders a member template.
 *
 * @param page The page to render.
 */
export function memberTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  const { heading } = context.markdown;

  md.push(context.hook('page.begin').join('\n'));

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.partials.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  md.push(context.hook('content.begin').join('\n'));

  md.push(context.partials.member(page.model, 1));

  if (!context.options.getValue('hideGenerator')) {
    md.push(context.partials.generator());
  }

  md.push(context.hook('page.end').join('\n'));

  return md.join('\n\n');
}
