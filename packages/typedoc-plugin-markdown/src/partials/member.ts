import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { heading } from '../support/els';
import {
  getReflectionHeadingLevel,
  getReflectionTitle,
} from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  parentHeadingLevel?: number,
) {
  const md: string[] = [];

  const headingLevel = parentHeadingLevel
    ? parentHeadingLevel
    : getReflectionHeadingLevel(reflection, context.getOption('groupByKinds'));

  if (context.getOption('namedAnchors')) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (!reflection.hasOwnDocument) {
    md.push(heading(headingLevel, `${getReflectionTitle(reflection)}`));
  }

  if (
    [
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Enum,
    ].includes(reflection.kind)
  ) {
    md.push(context.partials.reflectionMember(reflection));
  } else {
    if (reflection.signatures) {
      reflection.signatures.forEach((signature) => {
        md.push(context.partials.signatureMember(signature));
      });
    } else {
      if (reflection instanceof ReferenceReflection) {
        md.push(context.partials.referenceMember(reflection));
      }

      if (reflection instanceof DeclarationReflection) {
        md.push(context.partials.declarationMember(reflection, headingLevel));
      }
    }
  }

  return md.join('\n\n');
}
