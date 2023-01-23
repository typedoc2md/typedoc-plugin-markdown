import { PageEvent, ProjectReflection } from 'typedoc';
import { heading, link } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (Boolean(page.model.readme)) {
    md.push(
      link('Readme', context.relativeURL(context.getOption('entryDocument'))),
    );
  }

  md.push(heading(1, page.project.name));

  md.push(context.partials.toc(page.model));

  md.push(context.partials.members(page.model));

  return md.join('\n\n');
}
