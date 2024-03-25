import { heading } from '@theme/lib/markdown';
import { escapeChars } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';

/**
 * @category Member Partials
 */
export function member(
  context: MarkdownThemeRenderContext,
  model: DeclarationReflection,
  headingLevel: number,
  nested = false,
): string {
  const md: string[] = [];

  if (context.options.getValue('namedAnchors')) {
    md.push(`<a id="${model.anchor}" name="${model.anchor}"></a>`);
  }

  if (!model.hasOwnDocument && !(model.kind === ReflectionKind.Constructor)) {
    md.push(heading(headingLevel, context.partials.memberTitle(model)));
  }

  const getMember = (reflection: DeclarationReflection) => {
    if (
      [
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
      ].includes(reflection.kind)
    ) {
      return context.partials.memberWithGroups(reflection, headingLevel + 1);
    }

    if (reflection.kind === ReflectionKind.Constructor) {
      return context.partials.constructor(reflection, headingLevel);
    }

    if (reflection.kind === ReflectionKind.Accessor) {
      return context.partials.accessor(reflection, headingLevel + 1);
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
            context.partials.signature(
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

    return context.partials.declaration(reflection, {
      headingLevel: headingLevel + 1,
      nested,
    });
  };

  const member = getMember(model);

  if (member) {
    md.push(member);
  }

  return md.join('\n\n');
}
