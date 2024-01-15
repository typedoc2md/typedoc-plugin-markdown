import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

/**
 * Renders a reflection template.
 *
 * @param page The page to render.
 */
export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(context.hook('page.begin').join('\n'));

  const { heading } = context.markdown;

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.partials.header(page));
  }

  if (!context.options.getValue('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  md.push(heading(1, context.partials.pageTitle(page)));

  md.push(context.hook('content.begin').join('\n'));

  md.push(context.partials.reflectionMember(page.model, 2));

  if (!context.options.getValue('hideGenerator')) {
    md.push(context.partials.generator());
  }

  md.push(context.hook('page.end').join('\n'));

  return md.join('\n\n');
}
