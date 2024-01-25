import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  if (typeDeclaration.children) {
    if (context.options.getValue('typeDeclarationFormat') === 'table') {
      md.push(context.partials.typeDeclarationTable(typeDeclaration.children));
    } else {
      const declarations = context.helpers.flattenDeclarations(
        typeDeclaration.children,
      );
      declarations.forEach((declaration: DeclarationReflection) => {
        md.push(context.partials.member(declaration, headingLevel + 1, true));
      });
    }
  }
  return md.join('\n\n');
}
