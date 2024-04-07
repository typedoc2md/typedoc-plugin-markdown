import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeDeclarationList(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  headingLevel: number,
): string {
  const md: string[] = [];
  const declarations = this.helpers.getFlattenedDeclarations(model);
  declarations?.forEach((declaration: DeclarationReflection) => {
    md.push(
      this.partials.member(declaration, {
        headingLevel: headingLevel + 1,
        nested: true,
      }),
    );
  });

  return md.join('\n\n');
}
