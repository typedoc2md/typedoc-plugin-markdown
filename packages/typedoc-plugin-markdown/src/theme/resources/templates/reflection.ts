import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Template that maps to individual reflection models.
 */
export function reflection(this: MarkdownThemeContext) {
  const md: string[] = [];

  const model = this.page.model as DeclarationReflection;

  md.push(this.hook('page.begin').join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  if (!this.options.getValue('hidePageTitle')) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('content.begin').join('\n'));

  if (
    [
      ReflectionKind.Module,
      ReflectionKind.Namespace,
      ReflectionKind.Enum,
      ReflectionKind.Class,
      ReflectionKind.Interface,
    ].includes(model.kind)
  ) {
    md.push(this.partials.memberWithGroups(model, { headingLevel: 2 }));
  } else {
    md.push(this.partials.member(model, { headingLevel: 1 }));
  }

  md.push(this.partials.footer());

  md.push(this.hook('page.end').join('\n'));

  return md.join('\n\n');
}
