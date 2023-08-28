import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (context.options.getValue('namedAnchors')) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (!reflection.hasOwnDocument) {
    md.push(heading(headingLevel, context.memberTitle(reflection)));
  }

  const getMember = (reflection: DeclarationReflection) => {
    if (
      reflection.kindOf([
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
      ])
    ) {
      return context.reflectionMember(reflection, headingLevel + 1);
    }

    if (reflection.signatures) {
      return reflection.signatures
        ?.map((signature) => {
          return context.signatureMember(signature, headingLevel + 1);
        })
        .join('\n\n');
    }

    if (reflection.getSignature) {
      return context.signatureMember(reflection.getSignature, headingLevel + 1);
    }

    if (reflection.setSignature) {
      return context.signatureMember(reflection.setSignature, headingLevel + 1);
    }

    if (reflection instanceof ReferenceReflection) {
      return context.referenceMember(reflection);
    }

    return context.declarationMember(reflection, headingLevel + 1);
  };

  const member = getMember(reflection);

  if (member) {
    md.push(member);
  }

  return md.join('\n\n');
}
