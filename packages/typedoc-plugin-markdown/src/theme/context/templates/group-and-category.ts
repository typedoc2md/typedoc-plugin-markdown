import { MarkdownPageEvent } from '@plugin/events/index.js';
import { heading } from '@plugin/libs/markdown/heading.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  i18n,
  ProjectReflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';

export function groupAndCategory(
  this: MarkdownThemeContext,
  page: MarkdownPageEvent<DeclarationReflection | ProjectReflection>,
) {
  const md: string[] = [];

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

  const index = model.children.reduce((acc, child) => {
    if (child.kind === ReflectionKind.Document) {
      if (!acc[i18n.kind_plural_document()]) {
        acc[i18n.kind_plural_document()] = { children: [] };
      }
      acc[i18n.kind_plural_document()].children.push(child);
    }
    if (child.kind === ReflectionKind.Namespace) {
      if (!acc[i18n.kind_plural_namespace()]) {
        acc[i18n.kind_plural_namespace()] = { children: [] };
      }
      acc[i18n.kind_plural_namespace()].children.push(child);
    }
    return acc;
  }, {});

  Object.entries(index).forEach(([key, value]) => {
    md.push(heading(2, key));
    md.push(this.partials.groupIndex(value as ReflectionCategory));
  });

  md.push(
    this.partials.members(model.children as DeclarationReflection[], {
      headingLevel: 2,
    }),
  );

  md.push(this.partials.footer());

  md.push(this.hook('page.end', this).join('\n'));

  return md.join('\n\n');
}
