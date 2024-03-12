import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders type declarations of a parent member.
 *
 * @category Member Partials
 */
export function typeDeclaration(
  context: MarkdownThemeRenderContext,
  model: DeclarationReflection[],
  headingLevel: number,
): string {
  const md: string[] = [];

  if (context.options.getValue('typeDeclarationFormat') === 'table') {
    md.push(context.partials.typeDeclarationTable(model));
  } else {
    md.push(context.partials.typeDeclarationList(model, headingLevel));
  }

  return md.join('\n\n');
}
