import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders type declarations as a list.
 *
 * @category Member Partials
 */
export function typeDeclarationList(
  context: MarkdownThemeRenderContext,
  model: DeclarationReflection[],
  headingLevel: number,
): string {
  const md: string[] = [];
  const declarations = context.helpers.flattenDeclarations(model, false);
  declarations?.forEach((declaration: DeclarationReflection) => {
    md.push(context.partials.member(declaration, headingLevel + 1, true));
  });

  return md.join('\n\n');
}
