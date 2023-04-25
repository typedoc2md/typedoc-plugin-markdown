import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function typeDeclarationMember(
  context: MarkdownThemeRenderContext,
  declarations: DeclarationReflection[],
  parentHeadingLevel: number,
) {
  const md: string[] = [];
  declarations.forEach((declaration) => {
    md.push(
      context.partials.declarationMember(declaration, parentHeadingLevel),
    );
  });
  return md.join('\n\n');
}
