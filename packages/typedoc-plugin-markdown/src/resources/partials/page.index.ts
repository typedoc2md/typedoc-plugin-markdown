import * as path from 'path';
import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { heading } from '../../support/els';
import { escapeChars } from '../../support/utils';

export function pageIndex(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection | ProjectReflection>,
  headingLevel: number,
): string {
  const md: string[] = [];
  if (!page.model.groups) {
    md.push(heading(headingLevel, 'Packages'));
    const packagesList = page.model.children?.map((projectPackage) => {
      return `- [${escapeChars(projectPackage.name)}](${context.relativeURL(
        Boolean(projectPackage.readme)
          ? `${path.dirname(
              projectPackage.url || '',
            )}/${context.options.getValue('entryFileName')}`
          : projectPackage.url,
      )})`;
    });
    md.push(packagesList?.join('\n') || '');
    return md.join('\n\n');
  }
  if (
    page.model.groups &&
    context.options.getValue('entryPoints').length === 1
  ) {
    md.push(context.memberIndex(page.model, headingLevel));
    return md.join('\n\n');
  }
  md.push(heading(headingLevel, 'Modules'));
  md.push(
    page.model.groups[0].children
      .map((child) => {
        return `- [${escapeChars(child.name)}](${context.relativeURL(
          child.url,
        )})`;
      })
      .join('\n'),
  );
  return md.join('\n\n');
}
