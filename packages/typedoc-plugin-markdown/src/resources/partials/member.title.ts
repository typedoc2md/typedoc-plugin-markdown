import { DeclarationReflection } from 'typedoc';
import { backTicks } from '../../support/els';
import { escapeChars } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function memberTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  typeParams = false,
) {
  const md = [escapeChars(reflection.name)];
  if (reflection.signatures?.length) {
    md.push('()');
  }
  if (typeParams && reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    md.push(`${backTicks(`<${typeParameters}>`)}`);
  }
  return md.join('');
}
