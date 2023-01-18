import { DeclarationReflection } from 'typedoc';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  shouldEscape = true,
) {
  const md: string[] = [];

  md.push(shouldEscape ? escapeChars(reflection.name) : reflection.name);

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    const title = `<${typeParameters}>`;
    md.push(shouldEscape ? escapeChars(title, '<>') : title);
  }

  return md.join('');
}
