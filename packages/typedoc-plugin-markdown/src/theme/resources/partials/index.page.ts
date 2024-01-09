import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
} from 'typedoc';
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

  if (hasIndex(page.model)) {
    md.push(context.reflectionIndex(page.model, false, headingLevel));
    return md.join('\n\n');
  }

  const isPackages =
    page.project.url === page.url &&
    context.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;

  if (isPackages && page.model.children?.length) {
    md.push(heading(headingLevel, context.getTextContent('label.packages')));
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

  return md.join('\n\n');
}
