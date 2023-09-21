import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { flattenDeclarations } from '../../helpers';

/**
 * @category Partials
 */
export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  if (typeDeclaration.children) {
    if (context.options.getValue('typeDeclarationFormat') === 'table') {
      md.push(context.typeDeclarationTable(typeDeclaration.children));
    } else {
      const declarations = flattenDeclarations(typeDeclaration.children);
      declarations.forEach((declaration: DeclarationReflection) => {
        md.push(context.member(declaration, headingLevel + 1, true));
      });
    }
  }
  return md.join('\n\n');
}
