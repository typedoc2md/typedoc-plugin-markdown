import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { blockQuoteBlock, heading } from '../../../support/elements';
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
    if (context.getOption('typeDeclarationFormat') === 'table') {
      md.push(context.propertiesTable(typeDeclaration.children, 'Member'));
    } else {
      const list = typeDeclaration.children.map((declarationChild) => {
        return [
          heading(
            headingLevel,
            [escapeChars(parentName || ''), escapeChars(declarationChild.name)]
              .filter((name) => Boolean(name))
              .join('.'),
          ),
          context.declarationMember(declarationChild, headingLevel + 1, true),
        ].join('\n\n');
      });
      const output = list.join(!parentName && dividers ? '\n\n___\n\n' : '');
      if (parentName) {
        md.push(blockQuoteBlock(output));
      } else {
        md.push(output);
      }
    }
  }
  return md.join('\n');
}
