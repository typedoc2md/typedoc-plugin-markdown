import { SINGULAR_KIND_KEY_MAP } from '@plugin/options/text-mappings';
import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeContext, TextContentMappings } from '../../..';

/**
 * @category Page Partials
 */
export function pageTitle(this: MarkdownThemeContext): string {
  const page = this.page;
  if (page.model?.url === page.project.url) {
    const titleContent = this.options.isSet('indexPageTitle')
      ? this.options.getValue('indexPageTitle')
      : this.getText('title.indexPage');
    return titleContent
      .replace('{projectName}', page.project.name)
      .replace(
        '{version}',
        page.project.packageVersion ? `v${page.project.packageVersion}` : '',
      )
      .replace(/\s+/g, ' ')
      .trim();
  }

  const name = this.partials.memberTitle(page.model as DeclarationReflection);

  const textContent =
    page.model.kind === ReflectionKind.Module
      ? this.getText('title.modulePage')
      : this.options.isSet('memberPageTitle')
        ? this.options.getValue('memberPageTitle')
        : this.getText('title.memberPage');

  const kindKey = SINGULAR_KIND_KEY_MAP[
    ReflectionKind.singularString(page.model.kind)
  ] as keyof TextContentMappings;
  return textContent
    .replace('{name}', name)
    .replace('{kind}', this.getText(kindKey));
}
