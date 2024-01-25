import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../markdown';
import { escapeChars } from '../utils';

export function member(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
  nested = false,
): string {
  const md: string[] = [];

  if (context.options.getValue('namedAnchors')) {
    md.push(`<a id="${reflection.anchor}" name="${reflection.anchor}"></a>`);
  }

  if (
    !reflection.hasOwnDocument &&
    !(reflection.kind === ReflectionKind.Constructor)
  ) {
    const memberName = context.partials.memberTitle(reflection);
    const memberHeading = context
      .getText('title.member')
      .replace('{name}', memberName)
      .replace(
        '{kind}',

        context.getTextFromKindString(
          ReflectionKind.singularString(reflection.kind),
        ),
      );
    md.push(heading(headingLevel, memberHeading));
  }

  const getMember = (reflection: DeclarationReflection) => {
    if (
      [
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
      ].includes(reflection.kind)
    ) {
      return context.partials.reflectionMember(reflection, headingLevel + 1);
    }

    if (reflection.kind === ReflectionKind.Constructor) {
      return context.partials.constructorMember(reflection, headingLevel);
    }

    if (reflection.kind === ReflectionKind.Accessor) {
      return context.partials.accessorMember(reflection, headingLevel + 1);
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
            context.partials.signatureMember(
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
      return context.partials.referenceMember(reflection);
    }

    return context.partials.declarationMember(
      reflection,
      headingLevel + 1,
      nested,
    );
  };

  const member = getMember(reflection);

  if (member) {
    md.push(member);
  }

  return md.join('\n\n');
}
