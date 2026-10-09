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
    // Each parent is its own list item (`interface C extends A, B`).
    const parents = !hModel.isTarget
      ? hModel.types.map((hierarchyType) => {
          return this.helpers.getHierarchyType(hierarchyType as SomeType, {
            isTarget: hModel.isTarget || false,
          });
        })
      : null;
    if (hModel.next) {
      if (parents) {
        md.push(heading(options.headingLevel, i18n.theme_extends()));
        md.push(unorderedList(parents));
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
