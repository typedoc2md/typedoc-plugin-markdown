import { heading } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * Renders a signature collection.
 *
 * @category Member Partials
 */
export function signatures(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: {
    headingLevel: number;
    nested?: boolean;
  },
): string {
  const md: string[] = [];

  const multipleSignatures = model.signatures && model.signatures?.length > 1;

  if (model.comment && multipleSignatures) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  }

  if (multipleSignatures && model.documents) {
    md.push(
      this.partials.documents(model, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  }

  model.signatures?.forEach((signature) => {
    if (multipleSignatures) {
      md.push(
        heading(
          options.headingLevel + 1,
          `${escapeChars(signature.name)}(${signature.parameters
            ?.map((param) => param.name)
            .join(', ')})`,
        ),
      );
    }
    md.push(
      this.partials.signature(signature, {
        headingLevel: multipleSignatures
          ? options.headingLevel + 2
          : options.headingLevel + 1,
        nested: options.nested,
        multipleSignatures,
      }),
    );
  });

  return md.join('\n\n');
}
