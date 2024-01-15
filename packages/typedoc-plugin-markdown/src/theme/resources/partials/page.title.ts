import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownPageEvent, MarkdownThemeRenderContext } from '../../..';

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
      : context.text.get('title.indexPage');
    return context.text.indexTitle(
      titleContent,
      page.project.name,
      page.project.packageVersion,
    );
  }

  const name = context.partials.memberTitle(
    page.model as DeclarationReflection,
  );

  const textContent = page.model.kindOf(ReflectionKind.Module)
    ? context.text.get('title.modulePage')
    : context.options.isSet('memberPageTitle')
      ? context.options.getValue('memberPageTitle')
      : context.text.get('title.memberPage');

  return textContent
    .replace('{name}', name)
    .replace('{kind}', context.text.kindString(page.model.kind));
}
