import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  md.push(reflection.name);

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    md.push(`\\<${typeParameters}\\>`);
  }

  return md.join('');
}
