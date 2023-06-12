import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, unorderedList } from '../../../support/elements';

/**
 * @category Partials
 */
export function reflectionMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (reflection.comment) {
    md.push(context.comment(reflection.comment, headingLevel));
  }

  if (
    !context.options.getValue('hideHierarchy') &&
    reflection.typeHierarchy?.next
  ) {
    md.push(context.memberHierarchy(reflection.typeHierarchy, headingLevel));
  }

  if (reflection.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.typeParametersTable(reflection.typeParameters));
  }

  if (reflection.implementedTypes) {
    md.push(heading(headingLevel, 'Implements'));
    md.push(
      unorderedList(
        reflection.implementedTypes.map((implementedType) =>
          context.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in reflection && reflection.signatures) {
    reflection.signatures.forEach((signature) => {
      md.push(context.signatureMember(signature, headingLevel));
    });
  }

  if ('indexSignature' in reflection && reflection.indexSignature) {
    md.push(heading(headingLevel, 'Indexable'));
    md.push(context.indexSignatureTitle(reflection.indexSignature));
  }

  if (reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])) {
    md.push(context.memberTOC(reflection, headingLevel));
  }

  md.push(context.members(reflection, headingLevel));

  return md.join('\n\n');
}
