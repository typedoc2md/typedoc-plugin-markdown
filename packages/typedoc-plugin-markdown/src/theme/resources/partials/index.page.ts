import * as path from 'path';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';
import { hasIndex } from '../../helpers';

/**
 * @category Partials
 */
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

  if (hasIndex(page.model)) {
    const isModules = page.project.children?.every((child) =>
      child.kindOf(ReflectionKind.Module),
    );

    if (!isModules) {
      md.push(heading(2, 'Exports'));
    }

    md.push(
      context.reflectionIndex(
        page.model,
        false,
        isModules ? headingLevel : headingLevel + 1,
      ),
    );
    return md.join('\n\n');
  }

  return md.join('\n\n');
}
