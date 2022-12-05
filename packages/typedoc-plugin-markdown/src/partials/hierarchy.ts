import { DeclarationHierarchy, SomeType } from 'typedoc';
import { bold } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function hierarchy(
  context: MarkdownThemeRenderContext,
  declarationHierarchy: DeclarationHierarchy,
) {
  const level = 0;
  const md: string[] = [];
  md.push(getHierarchy(context, declarationHierarchy, level).join('\n'));
  return md.join('\n');
}

function getHierarchy(
  context: MarkdownThemeRenderContext,
  props: DeclarationHierarchy,
  level: number,
) {
  level = level + 1;
  let md = props.types.map((hierarchyType) => {
    return (
      getSymbol(level) +
      (props.isTarget
        ? bold(hierarchyType.toString())
        : context.partials.someType(hierarchyType as SomeType, undefined, true))
    );
  });
  if (props.next) {
    md = [...md, ...getHierarchy(context, props.next, level)];
  }
  return md;
}

function getSymbol(level: number) {
  if (level === 1) {
    return '- ';
  }
  return level > 1
    ? `${[...Array(level - 1)].map(() => '  ').join('')} - `
    : '';
}
