import { PageEvent, ProjectReflection } from 'typedoc';
import { heading } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (context.getOption('enableFrontmatter')) {
    md.push(context.partials.frontmatter(page));
  }

  if (!context.getOption('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment, 2));
  }

  md.push(context.partials.toc(page.model));

  md.push(context.partials.members(page.model));

  return md.join('\n\n');
}