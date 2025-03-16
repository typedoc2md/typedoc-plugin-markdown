import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function constructor(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  model.signatures?.forEach((signature) => {
    md.push(
      heading(
        options.headingLevel,
        ReflectionKind.singularString(ReflectionKind.Constructor),
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
