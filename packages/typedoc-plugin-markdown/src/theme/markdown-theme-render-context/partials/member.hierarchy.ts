import {
  backTicks,
  bold,
  heading,
  unorderedList,
} from '@plugin/theme/lib/markdown';
import { DeclarationHierarchy, SomeType, Type } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders an declaration hierachy section.
 *
 * @category Member Partials
 */
export function hierarchy(
  context: MarkdownThemeRenderContext,
  model: DeclarationHierarchy,
  headingLevel: number,
): string {
  const md: string[] = [];
  const parent = !model.isTarget
    ? model.types
        .map((hierarchyType) => {
          return getHierarchyType(
            hierarchyType,
            model.isTarget || false,
            context,
          );
        })
        .join('.')
    : null;
  if (model.next) {
    if (parent) {
      md.push(heading(headingLevel, context.helpers.getText('label.extends')));
      md.push(`- ${parent}`);
    } else {
      md.push(
        heading(headingLevel, context.helpers.getText('label.extendedBy')),
      );
      const lines: string[] = [];
      model.next.types.forEach((hierarchyType) => {
        lines.push(
          getHierarchyType(
            hierarchyType,
            model.next?.isTarget || false,
            context,
          ),
        );
      });
      md.push(unorderedList(lines));
    }
  }
  return md.join('\n\n');
}

function getHierarchyType(
  hierarchyType: Type,
  isTarget: boolean,
  context: MarkdownThemeRenderContext,
) {
  return isTarget
    ? bold(backTicks(hierarchyType.toString()))
    : context.partials.someType(hierarchyType as SomeType);
}
