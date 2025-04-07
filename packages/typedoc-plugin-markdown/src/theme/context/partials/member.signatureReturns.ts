import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import {
  DeclarationReflection,
  i18n,
  SignatureReflection,
  UnionType,
} from 'typedoc';

export function signatureReturns(
  this: MarkdownThemeContext,
  model: SignatureReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  const typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;

  md.push(heading(options.headingLevel, i18n.theme_returns()));

  if (!typeDeclaration?.signatures) {
    if (model.type && this.helpers.hasUsefulTypeDetails(model.type)) {
      if (model.type instanceof UnionType) {
        md.push(
          this.partials.typeDeclarationUnionContainer(
            model as unknown as DeclarationReflection,
            options,
          ),
        );
      }
    } else {
      md.push(this.helpers.getReturnType(model.type));
    }
  }

  const returnsTag = model.comment?.getTag('@returns');

  if (returnsTag) {
    md.push(this.helpers.getCommentParts(returnsTag.content));
  }

  if (typeDeclaration?.signatures) {
    typeDeclaration.signatures.forEach((signature) => {
      md.push(
        this.partials.signature(signature, {
          headingLevel: options.headingLevel + 1,
          nested: true,
        }),
      );
    });
  }

  if (typeDeclaration?.children) {
    md.push(
      this.partials.typeDeclaration(typeDeclaration, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  return md.join('\n\n');
}
