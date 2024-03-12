import { heading } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders an constructor member.
 *
 * @category Member Partials
 */
export function constructor(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  reflection.signatures?.forEach((signature) => {
    const params = signature.parameters?.map((param) => param.name).join(', ');
    md.push(heading(headingLevel, `${escapeChars(signature.name)}(${params})`));
    md.push(context.partials.signature(signature, headingLevel + 1));
  });

  return md.join('\n\n');
}
