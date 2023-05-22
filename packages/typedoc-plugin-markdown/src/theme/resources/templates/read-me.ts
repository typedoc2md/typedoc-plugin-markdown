import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { heading } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Templates
 */
export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  const INDEX_PLACEHOLDER_KEY = '$TYPEDOC_INDEX';

  if (!context.options.getValue('hidePageHeader')) {
    md.push(context.header(page));
  }

  if (page.model.readme) {
    const readmeContent = context.commentParts(page.model.readme);
    md.push(
      readmeContent.includes(INDEX_PLACEHOLDER_KEY)
        ? readmeContent.replace(
            INDEX_PLACEHOLDER_KEY,
            getIndexReplacer(context, page) || '',
          )
        : readmeContent,
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
