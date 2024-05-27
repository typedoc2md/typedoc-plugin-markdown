import { heading } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection } from 'typedoc';

/**
 * Renders an constructor member.
 *
 * @category Member Partials
 */
export function constructor(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  model.signatures?.forEach((signature) => {
    md.push(heading(options.headingLevel, `${escapeChars(signature.name)}()`));
    md.push(
      this.partials.signature(signature, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  });

  return md.join('\n\n');
}
