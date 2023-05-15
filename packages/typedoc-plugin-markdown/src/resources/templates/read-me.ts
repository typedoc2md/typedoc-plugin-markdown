import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { INDEX_PLACEHOLDER_KEY } from '../../support/constants';
import { heading } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hidePageHeader')) {
    md.push(context.partials.pageHeader(page));
  }

  if (page.model.readme) {
    const readmeContent = context.partials.commentParts(page.model.readme);
    md.push(
      readmeContent.includes(INDEX_PLACEHOLDER_KEY)
        ? readmeContent.replace(
            INDEX_PLACEHOLDER_KEY,
            getIndexReplacer(context, page) || '',
          )
        : readmeContent,
    );
  }

  return md.join('\n\n');
}

function getIndexReplacer(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];
  if (!context.getOption('hidePageTitle')) {
    md.push(heading(2, context.partials.pageTitle(page)));
  }
  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment, 2));
  }
  md.push(context.partials.pageIndex(page, 3));
  md.push(context.partials.members(page.model, 3));
  return md.join('\n\n');
}
