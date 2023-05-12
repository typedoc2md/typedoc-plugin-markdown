import * as path from 'path';
import { PageEvent, ProjectReflection } from 'typedoc';
import { heading } from '../../support/els';
import { escapeChars } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function projectTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hidePageHeader')) {
    md.push(context.partials.pageHeader(page));
  }

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.getOption('hidePageTitle')) {
    md.push(heading(1, context.partials.pageTitle(page)));
  }

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment, 2));
  }

  if (page.model.groups) {
    md.push(context.partials.toc(page.model));
  } else {
    md.push(heading(2, 'Packages'));

    const packagesList = page.model.children?.map((projectPackage) => {
      return `- [${escapeChars(projectPackage.name)}](${context.relativeURL(
        Boolean(projectPackage.readme)
          ? `${path.dirname(projectPackage.url || '')}/${context.readmeFile}`
          : projectPackage.url,
      )})`;
    });
    md.push(packagesList?.join('\n') || '');
  }

  md.push(context.partials.members(page.model, 2));

  return md.join('\n\n');
}
