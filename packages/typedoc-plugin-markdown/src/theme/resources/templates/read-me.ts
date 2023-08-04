import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Templates
 */
export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (page.model.readme) {
    md.push(context.commentParts(page.model.readme));
  }

  md.push(context.footer());

  return md.join('\n\n');
}
