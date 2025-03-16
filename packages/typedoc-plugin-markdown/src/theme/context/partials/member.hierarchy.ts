import { heading, unorderedList } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationHierarchy, i18n, SomeType } from 'typedoc';

export function hierarchy(
  this: MarkdownThemeContext,
  model: DeclarationHierarchy,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  const getHierarchy = (hModel: DeclarationHierarchy) => {
    const parent = !hModel.isTarget
      ? hModel.types
          .map((hierarchyType) => {
            return this.helpers.getHierarchyType(hierarchyType as SomeType, {
              isTarget: hModel.isTarget || false,
            });
          })
          .join('.')
      : null;
    if (hModel.next) {
      if (parent) {
        md.push(heading(options.headingLevel, i18n.theme_extends()));
        md.push(`- ${parent}`);
      } else {
        md.push(heading(options.headingLevel, i18n.theme_extended_by()));
        const lines: string[] = [];
        hModel.next.types.forEach((hierarchyType) => {
          lines.push(
            this.helpers.getHierarchyType(hierarchyType as SomeType, {
              isTarget: hModel.next?.isTarget || false,
            }),
          );
        });
        md.push(unorderedList(lines));
      }
      if (hModel.next?.next) {
        getHierarchy(hModel.next);
      }
    }
  };

  getHierarchy(model);

  return md.join('\n\n');
}
