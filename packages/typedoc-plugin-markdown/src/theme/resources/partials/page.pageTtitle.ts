import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../..';

/**
 * @category Page Partials
 */
export function pageTitle(context: MarkdownThemeRenderContext): string {
  const page = context.page;
  if (page.model?.url === page.project.url) {
    const titleContent = context.options.isSet('indexPageTitle')
      ? context.options.getValue('indexPageTitle')
      : context.helpers.getText('title.indexPage');
    return context.helpers.getProjectName(titleContent);
  }

  const name = context.partials.memberTitle(
    page.model as DeclarationReflection,
  );

  const textContent =
    page.model.kind === ReflectionKind.Module
      ? context.helpers.getText('title.modulePage')
      : context.options.isSet('memberPageTitle')
        ? context.options.getValue('memberPageTitle')
        : context.helpers.getText('title.memberPage');

  return textContent
    .replace('{name}', name)
    .replace(
      '{kind}',
      context.helpers.getTextFromKindString(
        ReflectionKind.singularString(page.model.kind),
      ),
    );
}
