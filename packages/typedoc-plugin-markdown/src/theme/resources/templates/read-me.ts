import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';

/**
 * @category Templates
 */
export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  const INDEX_PAGE_PLACEHOLDER = '[TYPEDOC_INDEX]';
  const INDEX_URL_PLACEHOLDER_KEY = '[TYPEDOC__URL]';

  if (page.model.readme) {
    const readmeContent = context.commentParts(page.model.readme);
    md.push(
      readmeContent
        .replace(INDEX_PAGE_PLACEHOLDER, getIndexReplacer(context, page) || '')
        .replace(
          INDEX_URL_PLACEHOLDER_KEY,
          `./${context.options.getValue('indexFileName')}`,
        ),
    );
  }

  md.push(context.footer());

  return md.join('\n\n');
}

function getIndexReplacer(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];
  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }
  md.push(context.pageIndex(page, 2));
  md.push(context.members(page.model, 3));
  return md.join('\n\n');
}
