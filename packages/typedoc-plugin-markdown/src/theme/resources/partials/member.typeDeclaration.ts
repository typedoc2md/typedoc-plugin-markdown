import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeDeclaration(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (
    this.options
      .getValue('typeDeclarationFormat')
      .toLowerCase()
      .includes('table')
  ) {
    md.push(this.partials.typeDeclarationTable(model));
  } else {
    md.push(this.partials.typeDeclarationList(model, options.headingLevel));
  }

  return md.join('\n\n');
}
