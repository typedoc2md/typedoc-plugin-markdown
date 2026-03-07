import { codeBlock } from '@plugin/libs/markdown/code-block.js';
import { heading } from '@plugin/libs/markdown/heading.js';
import { horizontalRule } from '@plugin/libs/markdown/horizontal-rule.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  i18n,
  ReflectionType,
  UnionType,
} from 'typedoc';

export function typeDeclarationUnionContainer(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: {
    headingLevel: number;
  },
): string {
  const md: string[] = [];
  if (model.type instanceof UnionType) {
    const useCodeBlocks = this.options.getValue('useCodeBlocks');
    const elementSummaries = model.type?.elementSummaries;
    const numberOfTypes = model.type?.types?.length;

    model.type?.types?.forEach((type, i) => {
      if (type instanceof ReflectionType) {
        const isFunction = type.declaration?.signatures?.length;
        md.push(
          heading(
            options.headingLevel + 1,
            isFunction ? i18n.kind_function() : i18n.kind_type_literal(),
          ),
        );

        const typeOut = this.partials.someType(type, {
          forceCollapse: true,
        });

        md.push(useCodeBlocks ? codeBlock(typeOut) : typeOut);

        if (elementSummaries?.[i]) {
          md.push(this.helpers.getCommentParts(elementSummaries[i]));
        }

        // if (!isFunction) {
        if (this.helpers.hasUsefulTypeDetails(type)) {
          md.push(
            this.partials.typeDeclarationContainer(model, type.declaration, {
              headingLevel: isFunction
                ? options.headingLevel + 2
                : options.headingLevel + 1,
            }),
          );
        }
        // }
      } else {
        md.push(`${this.partials.someType(type)}`);

        if (elementSummaries?.[i]) {
          md.push(this.helpers.getCommentParts(elementSummaries[i]));
        }
      }

      if (i < numberOfTypes - 1) {
        md.push(horizontalRule());
      }
    });
  }
  return md.join('\n\n');
}
