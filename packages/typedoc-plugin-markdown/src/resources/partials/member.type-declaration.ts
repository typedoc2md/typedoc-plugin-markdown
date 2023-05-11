import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { FormatStyle } from '../../models';
import { blockQuoteBlock } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];
  if (typeDeclaration.children) {
    if (context.getOption('typeDeclarationFormat') === FormatStyle.Table) {
      md.push(
        context.partials.propertiesTable(typeDeclaration.children, 'Member'),
      );
    } else {
      const list = typeDeclaration.children.map((declarationChild) => {
        return context.partials.declarationMember(
          declarationChild,
          headingLevel,
        );
      });
      if (typeDeclaration?.parent?.kindOf(ReflectionKind.Property)) {
        md.push(blockQuoteBlock(list.join('\n')));
      } else {
        md.push(list.join('\n'));
      }
    }
  }
  return md.join('\n');
}
