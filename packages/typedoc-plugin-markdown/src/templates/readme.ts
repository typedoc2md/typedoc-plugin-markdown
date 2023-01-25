import { PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function readmeTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (context.getOption('enableFrontmatter')) {
    md.push(context.partials.frontmatter(page));
  }

  if (page.model.readme) {
    md.push(
      context.partials
        .commentParts(page.model.readme)
        .replace('[TYPEDOC_INDEX]', context.partials.toc(page.model)),
    );
  }

  return md.join('\n\n');
}
