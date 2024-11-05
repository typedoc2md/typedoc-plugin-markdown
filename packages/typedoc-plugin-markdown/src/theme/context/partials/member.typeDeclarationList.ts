import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection } from 'typedoc';

export function typeDeclarationList(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { headingLevel: number },
): string {
  const md: string[] = [];
  const declarations = this.helpers.getFlattenedDeclarations(model);
  declarations?.forEach((declaration: DeclarationReflection) => {
    md.push(
      this.partials.memberContainer(declaration, {
        headingLevel: options.headingLevel + 1,
        nested: true,
      }),
    );
  });

  return md.join('\n\n');
}
