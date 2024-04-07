import { heading } from '@plugin/libs/markdown';
import { escapeChars } from '@plugin/libs/utils';
import { MarkdownThemeContext } from '@plugin/theme';
import {
  DeclarationReflection,
  ReferenceReflection,
  ReflectionKind,
} from 'typedoc';

/**
 * @category Member Partials
 */
export function member(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number; nested?: boolean },
): string {
  const md: string[] = [];

  if (this.options.getValue('useHTMLAnchors')) {
    md.push(`<a id="${model.anchor}" name="${model.anchor}"></a>`);
  }

  if (!model.hasOwnDocument && !(model.kind === ReflectionKind.Constructor)) {
    md.push(heading(options.headingLevel, this.partials.memberTitle(model)));
  }

  const getMember = (reflection: DeclarationReflection) => {
    if (
      [
        ReflectionKind.Class,
        ReflectionKind.Interface,
        ReflectionKind.Enum,
      ].includes(reflection.kind)
    ) {
      return this.partials.memberWithGroups(reflection, {
        headingLevel: options.headingLevel + 1,
      });
    }

    if (reflection.kind === ReflectionKind.Constructor) {
      return this.partials.constructor(reflection, {
        headingLevel: options.headingLevel,
      });
    }

    if (reflection.kind === ReflectionKind.Accessor) {
      return this.partials.accessor(reflection, {
        headingLevel: options.headingLevel + 1,
      });
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
                options.headingLevel + 1,
                `${escapeChars(signature.name)}(${signature.parameters
                  ?.map((param) => param.name)
                  .join(', ')})`,
              ),
            );
          }
          signatureMd.push(
            this.partials.signature(signature, {
              headingLevel: multipleSignatures
                ? options.headingLevel + 2
                : options.headingLevel + 1,
              nested: options.nested,
            }),
          );
          return signatureMd.join('\n\n');
        })
        .join('\n\n');
    }

    if (reflection instanceof ReferenceReflection) {
      return this.partials.referenceMember(reflection);
    }

    return this.partials.declaration(reflection, {
      headingLevel: options.headingLevel + 1,
      nested: options.nested,
    });
  };

  const member = getMember(model);

  if (member) {
    md.push(member);
  }

  return md.join('\n\n');
}
