import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { blockQuoteBlock } from '../../../support/elements';

/**
 * @category Partials
 */
export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
  parentName?: string,
) {
  const md: string[] = [];
  if (typeDeclaration.children) {
    if (context.options.getValue('typeDeclarationFormat') === 'table') {
      md.push(context.propertiesTable(typeDeclaration.children, 'Member'));
    } else {
      const list = typeDeclaration.children.map((declarationChild) => {
        return [
          context.declarationMember(declarationChild, headingLevel + 1, true),
        ].join('\n\n');
      });
      const output = list.join('');
      if (parentName) {
        md.push(blockQuoteBlock(output));
      } else {
        md.push(output);
      }
    }
  }
  return md.join('\n');
}
