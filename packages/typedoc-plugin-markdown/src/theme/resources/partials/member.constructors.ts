import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function constructorMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  reflection.signatures?.forEach((signature) => {
    const params = signature.parameters?.map((param) => param.name).join(', ');
    md.push(heading(headingLevel, `${escapeChars(signature.name)}(${params})`));
    md.push(context.signatureMember(signature, headingLevel + 1));
  });

  return md.join('\n\n');
}
