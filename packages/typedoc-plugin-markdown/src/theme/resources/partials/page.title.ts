import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
): string {
  const md: string[] = [];

  if (page.model?.url === page.project.url) {
    md.push(
      (context.getOption('indexPageTitle') as string) ||
        getProjectDisplayName(
          page.project,
          context.getOption('includeVersion'),
        ),
    );
  } else {
    md.push(context.memberTitle(page.model as DeclarationReflection, true));
  }
  return md.join(' ');
}
