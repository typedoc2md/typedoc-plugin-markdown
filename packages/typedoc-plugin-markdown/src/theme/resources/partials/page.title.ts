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
  if (page.model?.url === page.project.url) {
    const titleContent = context.options.isSet('indexPageTitle')
      ? context.options.getValue('indexPageTitle')
      : context.getTextContent('title.indexPage');
    return context.indexTitle(
      titleContent,
      page.project.name,
      page.project.packageVersion,
    );
  }

  const name = getMemberTitle(page.model as DeclarationReflection);

  const textContent = page.model.kindOf(ReflectionKind.Module)
    ? context.getTextContent('title.modulePage')
    : context.options.isSet('memberPageTitle')
      ? context.options.getValue('memberPageTitle')
      : context.getTextContent('title.memberPage');

  return textContent
    .replace('{name}', name)
    .replace('{kind}', context.kindString(page.model.kind));
}
