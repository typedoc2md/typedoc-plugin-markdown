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

  if (
    [
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Enum,
    ].includes(reflection.kind)
  ) {
    md.push(context.reflectionMember(reflection, headingLevel + 1));
  } else {
    if (reflection.signatures) {
      reflection.signatures.forEach((signature) => {
        md.push(context.signatureMember(signature, headingLevel + 1));
      });
    } else {
      if (reflection instanceof ReferenceReflection) {
        md.push(context.referenceMember(reflection));
      }

      if (reflection instanceof DeclarationReflection) {
        md.push(context.declarationMember(reflection, headingLevel + 1));
      }
    }
  }

  return md.join('\n\n');
}
