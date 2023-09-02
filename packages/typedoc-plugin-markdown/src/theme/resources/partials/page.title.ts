import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { getMemberTitle } from '../../helpers';

/**
 * @category Partials
 */
export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
): string {
  const titleTemplate = context.options.getValue('titleTemplate') as string;
  const name = getMemberTitle(page.model as DeclarationReflection);
  if (page.model?.url === page.project.url) {
    return 'API';
  }

  return titleTemplate
    .replace('{name}', name)
    .replace('{kind}', ReflectionKind.singularString(page.model.kind));
}
