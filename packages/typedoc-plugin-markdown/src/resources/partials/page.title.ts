import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { getProjectDisplayName } from '../../support/helpers';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
) {
  const md: string[] = [];
  if (page.model?.url === page.project.url) {
    md.push(
      context.getOption('indexPageTitle') ||
        getProjectDisplayName(
          page.project,
          context.getOption('includeVersion'),
        ),
    );
  } else {
    md.push(
      context.partials.memberTitle(page.model as DeclarationReflection, true),
    );
  }
  return md.join(' ');
}
