import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { getReflectionTitle } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
) {
  const md: string[] = [];
  if (page.model?.url === page.project.url) {
    md.push(context.getOption('indexPageTitle') || page.project.name);
  } else {
    md.push(getReflectionTitle(page.model as DeclarationReflection, true));
  }
  return md.join(' ');
}
