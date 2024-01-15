import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

/**
 * @category Partials
 */
export function pageIndex(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
  headingLevel: number,
): string {
  const md: string[] = [];
  const { heading } = context.markdown;
  const { escapeChars } = context.utils;

  if (page.model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    md.push(context.partials.reflectionIndex(page.model, headingLevel));
    return md.join('\n\n');
  }

  const isPackages =
    page.project.url === page.url &&
    context.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;

  if (isPackages && page.model.children?.length) {
    md.push(heading(headingLevel, context.text.get('label.packages')));
    const packagesList = page.model.children?.map((projectPackage) => {
      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;
      return `- ${context.partials.linkTo(
        escapeChars(projectPackage.name),
        urlTo,
      )}`;
    });
    md.push(packagesList?.join('\n') || '');
    return md.join('\n\n');
  }

  return md.join('\n\n');
}
