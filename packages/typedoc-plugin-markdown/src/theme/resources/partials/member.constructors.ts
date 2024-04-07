import { heading } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
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
    const params = signature.parameters?.map((param) => param.name).join(', ');
    md.push(
      heading(
        options.headingLevel,
        `${escapeChars(signature.name)}(${params})`,
      ),
    );
    md.push(
      this.partials.signature(signature, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  });

  return md.join('\n\n');
}
