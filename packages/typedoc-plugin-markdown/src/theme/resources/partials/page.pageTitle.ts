import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeContext } from '../../..';

/**
 * @category Page Partials
 */
export function pageTitle(this: MarkdownThemeContext): string {
  const page = this.page;
  if (page.model?.url === page.project.url) {
    const titleContent = this.i18n.theme_title_index_page(
      page.project.name,
      page.project.packageVersion ? `v${page.project.packageVersion}` : '',
    );
    return titleContent.replace(/\s+/g, ' ').trim();
  }

  const name = this.partials.memberTitle(page.model as DeclarationReflection);
  const moduleTitle = this.i18n.theme_title_module_page(name);
  const memberTitle = this.i18n.theme_title_member_page(
    this.internationalization.kindSingularString(page.model.kind),
    name,
  );

  return page.model.kind === ReflectionKind.Module ? moduleTitle : memberTitle;
}
