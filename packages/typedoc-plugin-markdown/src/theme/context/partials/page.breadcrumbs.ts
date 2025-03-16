import { link } from '@plugin/libs/markdown/link.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { Reflection, ReflectionKind } from 'typedoc';

export function breadcrumbs(this: MarkdownThemeContext): string {
  if (this.page.model.kind === ReflectionKind.Project) {
    return '';
  }

  const textContentMappings = this.options.getValue('textContentMappings');

  const name = [
    this.helpers.getProjectName(
      textContentMappings['breadcrumbs.home'],
      this.page,
      false,
    ),
  ];

  const reflectionPath: Reflection[] = [];
  let reflection: Reflection = this.page.model;
  while (reflection.parent) {
    reflectionPath.push(reflection);
    reflection = reflection.parent;
  }

  const b = link(name.join(' - '), this.urlTo(this.page.project));
  const c = reflectionPath.reverse().map((r) => {
    if (this.router.getFullUrl(this.page.model) === this.router.getFullUrl(r)) {
      return escapeChars(r.name);
    }
    return link(escapeChars(r.name), this.urlTo(r));
  });
  const parts = [b, ...c];
  return parts.length > 1 ? [b, ...c].join(' / ') : '';
}
