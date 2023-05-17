import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { FormatStyle } from '../../models';
import { MarkdownThemeRenderContext } from '../../render-context';
import { blockQuoteBlock } from '../../support/els';

export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];
  if (typeDeclaration.children) {
    if (
      context.options.getValue('typeDeclarationFormat') === FormatStyle.Table
    ) {
      md.push(context.propertiesTable(typeDeclaration.children, 'Member'));
    } else {
      const list = typeDeclaration.children.map((declarationChild) => {
        return context.declarationMember(declarationChild, headingLevel);
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
