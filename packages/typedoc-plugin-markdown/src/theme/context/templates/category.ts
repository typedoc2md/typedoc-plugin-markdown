import { MarkdownPageEvent } from '@plugin/events';
import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, Reflection } from 'typedoc';

/**
 * Template that maps to individual category.
 */
export function category(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<Reflection>,
) {
  const md: string[] = ['CATEGORY'];

  const model = page.model as unknown as any;

  md.push(this.hook('page.begin', this).join('\n'));

  if (!this.options.getValue('hidePageHeader')) {
    md.push(this.partials.header());
  }

  if (!this.options.getValue('hideBreadcrumbs')) {
    md.push(this.partials.breadcrumbs());
  }

  if (!this.options.getValue('hidePageTitle')) {
    md.push(heading(1, this.partials.pageTitle()));
  }

  md.push(this.hook('content.begin', this).join('\n'));

  if (model.description) {
    md.push(this.helpers.getCommentParts(model.description));
  }

  md.push('GROUP_INDEX');
  md.push(heading(2, 'Namespaces'));
  md.push(this.partials.groupIndex(model));

  md.push(
    this.partials.members(model.children as DeclarationReflection[], {
      headingLevel: 2,
    }),
  );

  md.push(this.partials.footer());

  md.push(this.hook('page.end', this).join('\n'));

  return md.join('\n\n');
}
