import { DeclarationHierarchy, SomeType, Type } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import {
  backTicks,
  bold,
  heading,
  unorderedList,
} from '../../../support/elements';

export function memberHierarchy(
  context: MarkdownThemeRenderContext,
  declarationHierarchy: DeclarationHierarchy,
  headingLevel: number,
): string {
  const md: string[] = [];
  const parent = !declarationHierarchy.isTarget
    ? declarationHierarchy.types
        .map((hierarchyType) => {
          return getHierarchyType(
            hierarchyType,
            declarationHierarchy.isTarget || false,
            context,
          );
        })
        .join('.')
    : null;
  if (declarationHierarchy.next) {
    if (parent) {
      md.push(heading(headingLevel, 'Extends'));
      md.push(`- ${parent}`);
    } else {
      md.push(heading(headingLevel, 'Extended By'));
      const lines: string[] = [];
      declarationHierarchy.next.types.forEach((hierarchyType) => {
        lines.push(
          getHierarchyType(
            hierarchyType,
            declarationHierarchy.next?.isTarget || false,
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
    : context.someType(hierarchyType as SomeType);
}
