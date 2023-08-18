import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, blockQuoteBlock, heading } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  typeDeclaration: DeclarationReflection,
  headingLevel: number,
  parentName?: string,
  dividers = true,
) {
  const md: string[] = [];
  if (typeDeclaration.children) {
    if (context.options.getValue('typeDeclarationFormat') === 'table') {
      md.push(context.propertiesTable(typeDeclaration.children, 'Member'));
    } else {
      const list = typeDeclaration.children.map((declarationChild) => {
        return [
          heading(
            headingLevel,
            backTicks(
              [escapeChars(parentName || ''), declarationChild.name]
                .filter((name) => Boolean(name))
                .join('.'),
            ),
          ),
          context.declarationMember(declarationChild, headingLevel + 1, true),
        ].join('\n\n');
      });
      const output = list.join(!parentName && dividers ? '\n\n***\n\n' : '');
      if (parentName) {
        md.push(blockQuoteBlock(output));
      } else {
        md.push(output);
      }
    }
  }
  return md.join('\n');
}
