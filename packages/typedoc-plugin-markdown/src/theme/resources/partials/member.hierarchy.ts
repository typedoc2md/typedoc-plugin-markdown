import { heading, unorderedList } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationHierarchy, SomeType } from 'typedoc';

/**
 * @category Member Partials
 */
export function hierarchy(
  this: MarkdownThemeContext,
  model: DeclarationHierarchy,
  options: { headingLevel: number },
): string {
  const md: string[] = [];
  const parent = !model.isTarget
    ? model.types
        .map((hierarchyType) => {
          return this.helpers.getHierarchyType(hierarchyType as SomeType, {
            isTarget: model.isTarget || false,
          });
        })
        .join('.')
    : null;
  if (model.next) {
    if (parent) {
      md.push(heading(options.headingLevel, this.getText('label.extends')));
      md.push(`- ${parent}`);
    } else {
      md.push(heading(options.headingLevel, this.getText('label.extendedBy')));
      const lines: string[] = [];
      model.next.types.forEach((hierarchyType) => {
        lines.push(
          this.helpers.getHierarchyType(hierarchyType as SomeType, {
            isTarget: model.next?.isTarget || false,
          }),
        );
      });
      md.push(unorderedList(lines));
    }
  }
  return md.join('\n\n');
}
