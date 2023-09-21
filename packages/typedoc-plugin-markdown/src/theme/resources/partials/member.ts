import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';
import { getMemberTitle } from '../../helpers';

/**
 * @category Partials
 */
export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
  nested = false,
): string {
  const md: string[] = [];

  if (context.options.getValue('namedAnchors')?.headings) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (
    !reflection.hasOwnDocument &&
    !(reflection.kind === ReflectionKind.Constructor)
  ) {
    md.push(heading(headingLevel, getMemberTitle(reflection)));
  }

  const getMember = (reflection: DeclarationReflection) => {
    if (
      [
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
      ].includes(reflection.kind)
    ) {
      return context.reflectionMember(reflection, headingLevel + 1);
    }

    if (reflection.kind === ReflectionKind.Constructor) {
      return context.constructorMember(reflection, headingLevel);
    }

    if (reflection.kind === ReflectionKind.Accessor) {
      return context.accessorMember(reflection, headingLevel + 1);
    }

    if (reflection.signatures) {
      return reflection.signatures
        ?.map((signature) => {
          const signatureMd: string[] = [];
          const multipleSignatures =
            reflection.signatures && reflection.signatures?.length > 1;

          if (multipleSignatures) {
            signatureMd.push(
              heading(
                headingLevel + 1,
                `${escapeChars(signature.name)}(${signature.parameters
                  ?.map((param) => param.name)
                  .join(', ')})`,
              ),
            );
          }
          signatureMd.push(
            context.signatureMember(
              signature,
              multipleSignatures ? headingLevel + 2 : headingLevel + 1,
              nested,
            ),
          );
          return signatureMd.join('\n\n');
        })
        .join('\n\n');
    }

    if (reflection instanceof ReferenceReflection) {
      return context.referenceMember(reflection);
    }

    return context.declarationMember(reflection, headingLevel + 1, nested);
  };

  const member = getMember(reflection);

  if (member) {
    md.push(member);
  }

  return md.join('\n\n');
}
