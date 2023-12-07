import * as path from 'path';
import { DeclarationReflection, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { heading } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';
import { hasIndex } from '../../helpers';

/**
 * @category Partials
 */
export function pageIndex(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
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

  if (hasIndex(page.model)) {
    md.push(context.reflectionIndex(page.model, false, headingLevel));
    return md.join('\n\n');
  }

  return md.join('\n\n');
}
