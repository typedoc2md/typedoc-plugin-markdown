import { PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (page.model.readme) {
    md.push(context.partials.commentParts(page.model.readme));
  }

  return md.join('\n\n');
}
