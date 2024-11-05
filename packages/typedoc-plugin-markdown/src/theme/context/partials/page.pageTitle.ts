import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

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

  const textContent = [
    ReflectionKind.Module,
    ReflectionKind.Namespace,
  ].includes(page.model.kind)
    ? name
    : textContentMappings['title.memberPage'];

  return textContent.replace('{name}', name).replace('{kind}', kind);
}
