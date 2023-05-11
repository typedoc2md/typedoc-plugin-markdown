import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { heading } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
) {
  const md: string[] = [];

  if (context.getOption('namedAnchors')) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (!reflection.hasOwnDocument) {
    md.push(heading(headingLevel, context.partials.memberTitle(reflection)));
  }

  if (!context.getOption('hideKindTag')) {
    md.push(context.partials.memberKindTag(reflection));
  }

  if (
    [
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Enum,
    ].includes(reflection.kind)
  ) {
    md.push(context.partials.reflectionMember(reflection, headingLevel + 1));
  } else {
    if (reflection.signatures) {
      reflection.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature, headingLevel + 1));
      });
    } else {
      if (reflection instanceof ReferenceReflection) {
        md.push(context.partials.referenceMember(reflection));
      }

      if (reflection instanceof DeclarationReflection) {
        md.push(
          context.partials.declarationMember(reflection, headingLevel + 1),
        );
      }
    }
  }

  return md.join('\n\n');
}
