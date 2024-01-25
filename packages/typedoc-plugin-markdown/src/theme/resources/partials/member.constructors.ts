import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../markdown';
import { escapeChars } from '../utils';

export function constructorMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  reflection.signatures?.forEach((signature) => {
    const params = signature.parameters?.map((param) => param.name).join(', ');
    md.push(heading(headingLevel, `${escapeChars(signature.name)}(${params})`));
    md.push(context.partials.signatureMember(signature, headingLevel + 1));
  });

  return md.join('\n\n');
}
