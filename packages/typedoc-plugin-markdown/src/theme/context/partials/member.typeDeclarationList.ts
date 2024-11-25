import { codeBlock, heading } from '@plugin/libs/markdown/index.js';
import { TypeDeclarationVisibility } from '@plugin/options/maps.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionType } from 'typedoc';

export function typeDeclarationList(
  this: MarkdownThemeContext,
  model: DeclarationReflection[],
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const isCompact =
    this.options.getValue('typeDeclarationVisibility') ===
    TypeDeclarationVisibility.Compact;

  const declarations = isCompact
    ? model
    : this.helpers.getFlattenedDeclarations(model);

  declarations?.forEach((declaration: DeclarationReflection) => {
    if (isCompact && declaration.type instanceof ReflectionType) {
      md.push(
        heading(
          options.headingLevel + 1,
          this.partials.memberTitle(declaration),
        ),
      );
      const result = this.partials.reflectionType(declaration.type, {
        forceCollapse: isCompact,
      });
      md.push(useCodeBlocks ? codeBlock(result) : `> ${result}`);
      if (declaration.comment) {
        md.push(
          this.partials.comment(declaration.comment, {
            headingLevel: options.headingLevel,
          }),
        );
      }
    } else {
      md.push(
        this.partials.memberContainer(declaration, {
          headingLevel: declaration.name.includes('.')
            ? options.headingLevel + 2
            : options.headingLevel + 1,
          nested: true,
        }),
      );
    }
  });

  return md.join('\n\n');
}
