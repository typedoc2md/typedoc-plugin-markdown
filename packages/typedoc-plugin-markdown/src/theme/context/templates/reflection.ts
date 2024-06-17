import { MarkdownPageEvent } from '@plugin/events';
import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Template that maps to individual reflection models.
 */
export function reflection(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

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
    ].includes(page.model.kind)
  ) {
    md.push(this.partials.memberWithGroups(page.model, { headingLevel: 2 }));
  } else {
    md.push(this.partials.memberContainer(page.model, { headingLevel: 1 }));
  }

  md.push(this.partials.footer());

  md.push(this.hook('page.end').join('\n'));

  return md.join('\n\n');
}
