import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Templates
 */
export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  const INDEX_URL_PLACEHOLDER_KEY = '{indexUrl}';
  const INDEX_PAGE_PLACEHOLDER = '{indexPage}';

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

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
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];
  if (!context.options.getValue('hidePageTitle')) {
    md.push(heading(2, context.pageTitle(page)));
  }
  if (page.model.comment) {
    md.push(context.comment(page.model.comment, 2));
  }
  md.push(context.pageTOC(page, 3));
  md.push(context.members(page.model, 3));
  return md.join('\n\n');
}
