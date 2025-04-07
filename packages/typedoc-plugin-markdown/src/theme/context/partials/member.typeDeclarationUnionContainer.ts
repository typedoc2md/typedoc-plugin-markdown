import { codeBlock } from '@plugin/libs/markdown/code-block.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionType, UnionType } from 'typedoc';

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
    model.type.types.forEach((type, i) => {
      if (type instanceof ReflectionType) {
        const typeOut = this.partials.someType(type, {
          forceCollapse: true,
        });
        md.push(useCodeBlocks ? codeBlock(typeOut) : typeOut);
        md.push(
          this.partials.typeDeclarationContainer(
            model,
            type.declaration,
            options,
          ),
        );
      } else {
        md.push(`${this.partials.someType(type)}`);
      }
      if (elementSummaries?.[i]) {
        md.push(this.helpers.getCommentParts(elementSummaries[i]));
      }
    });
  }
  return md.join('\n\n');
}
