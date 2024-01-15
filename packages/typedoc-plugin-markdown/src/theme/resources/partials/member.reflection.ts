import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function reflectionMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];
  const { heading, unorderedList } = context.markdown;

  if (reflection.comment) {
    md.push(context.partials.comment(reflection.comment, headingLevel));
  }

  if (reflection.typeHierarchy?.next) {
    md.push(
      context.partials.memberHierarchy(reflection.typeHierarchy, headingLevel),
    );
  }

  if (reflection.typeParameters) {
    md.push(
      heading(headingLevel, context.text.get('kind.typeParameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.typeParametersTable(reflection.typeParameters));
    } else {
      md.push(context.partials.typeParametersList(reflection.typeParameters));
    }
  }

  if (reflection.implementedTypes) {
    md.push(heading(headingLevel, context.text.get('label.implements')));
    md.push(
      unorderedList(
        reflection.implementedTypes.map((implementedType) =>
          context.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in reflection && reflection.signatures) {
    reflection.signatures.forEach((signature) => {
      md.push(context.partials.signatureMember(signature, headingLevel));
    });
  }

  if ('indexSignature' in reflection && reflection.indexSignature) {
    md.push(heading(headingLevel, context.text.get('label.indexable')));
    md.push(context.partials.indexSignatureTitle(reflection.indexSignature));
  }

  if (reflection?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    const isAbsolute = reflection.groups?.every((group) =>
      group.allChildrenHaveOwnDocument(),
    );
    if (isAbsolute) {
      md.push(heading(headingLevel, context.text.get('label.index')));
    }
    md.push(
      context.partials.reflectionIndex(
        reflection,
        isAbsolute ? headingLevel + 1 : headingLevel,
      ),
    );
  }

  md.push(context.partials.members(reflection, headingLevel));

  return md.join('\n\n');
}
