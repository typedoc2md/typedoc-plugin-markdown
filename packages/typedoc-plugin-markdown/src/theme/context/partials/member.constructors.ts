import { heading } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection } from 'typedoc';

export function constructor(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  model.signatures?.forEach((signature) => {
    md.push(
      heading(options.headingLevel, `new ${escapeChars(signature.name)}()`),
    );
    md.push(
      this.partials.signature(signature, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  });

  return md.join('\n\n');
}
