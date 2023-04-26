import { DeclarationHierarchy, SomeType, Type } from 'typedoc';
import { backTicks, bold, unorderedList } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function hierarchy(
  context: MarkdownThemeRenderContext,
  declarationHierarchy: DeclarationHierarchy,
) {
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
    declarationHierarchy.next.types.forEach((hierarchyType) => {
      const line: string[] = [];
      if (parent) {
        line.push(parent);
      }
      line.push(
        getHierarchyType(
          hierarchyType,
          declarationHierarchy.next?.isTarget || false,
          context,
        ),
      );
      md.push(line.join('.'));
    });
  }
  return unorderedList(md);
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
