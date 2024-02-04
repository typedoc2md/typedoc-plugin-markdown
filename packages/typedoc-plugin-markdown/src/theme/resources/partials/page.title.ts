import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownPageEvent, MarkdownThemeRenderContext } from '../../..';

export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
): string {
  if (page.model?.url === page.project.url) {
    const titleContent = context.options.isSet('indexPageTitle')
      ? context.options.getValue('indexPageTitle')
      : context.text.getText('title.indexPage');
    return context.helpers.getIndexTitle(
      titleContent,
      page.project.name,
      page.project.packageVersion,
    );
  }

  const name = context.partials.memberTitle(
    page.model as DeclarationReflection,
  );

  const textContent = page.model.kindOf(ReflectionKind.Module)
    ? context.text.getText('title.modulePage')
    : context.options.isSet('memberPageTitle')
      ? context.options.getValue('memberPageTitle')
      : context.text.getText('title.memberPage');

  return textContent
    .replace('{name}', name)
    .replace(
      '{kind}',
      context.text.getTextFromKindString(
        ReflectionKind.singularString(page.model.kind),
      ),
    );
}
