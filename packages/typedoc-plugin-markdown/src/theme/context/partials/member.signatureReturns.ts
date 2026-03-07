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

  const returnsTag = model.comment?.getTag('@returns');
  const returnsComment = returnsTag
    ? this.helpers.getCommentParts(returnsTag.content)
    : undefined;

  const typeDeclaration = (model.type as any)
    ?.declaration as DeclarationReflection;
  const hasDeclarationSignatures = Boolean(typeDeclaration?.signatures?.length);
  const hasUsefulTypeDetails = model.type
    ? this.helpers.hasUsefulTypeDetails(model.type)
    : false;

  md.push(heading(options.headingLevel, i18n.theme_returns()));

  if (!hasDeclarationSignatures) {
    if (hasUsefulTypeDetails && model.type instanceof UnionType) {
      if (returnsComment) {
        md.push(returnsComment);
      }
      md.push(
        this.partials.typeDeclarationUnionContainer(
          model as unknown as DeclarationReflection,
          options,
        ),
      );
    } else if (!hasUsefulTypeDetails) {
      md.push(this.helpers.getReturnType(model.type));
      if (returnsComment) {
        md.push(returnsComment);
      }
    } else if (returnsComment) {
      md.push(returnsComment);
    }
  } else if (returnsComment) {
    md.push(returnsComment);
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
