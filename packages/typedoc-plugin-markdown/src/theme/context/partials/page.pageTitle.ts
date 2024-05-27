import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * @category Page Partials
 */
export function pageTitle(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');
  const page = this.page;
  if (page.model?.url === page.project.url) {
    return this.helpers.getProjectName(
      textContentMappings['title.indexPage'],
      page,
    );
  }

  const name = this.partials.memberTitle(page.model as DeclarationReflection);
  const kind = this.internationalization.kindSingularString(page.model.kind);
  const textContent =
    page.model.kind === ReflectionKind.Module
      ? name
      : textContentMappings['title.memberPage'];

  return textContent.replace('{name}', name).replace('{kind}', kind);
}
