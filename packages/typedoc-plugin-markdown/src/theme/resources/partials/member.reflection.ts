import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, unorderedList } from '../../../support/elements';
import { hasIndex, hasTOC } from '../../helpers';

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

  if (reflection.typeHierarchy?.next) {
    md.push(context.memberHierarchy(reflection.typeHierarchy, headingLevel));
  }

  if (reflection.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.typeParametersTable(reflection.typeParameters));
    } else {
      md.push(
        context.typeParametersList(reflection.typeParameters, headingLevel + 1),
      );
    }
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

  if (hasIndex(reflection)) {
    md.push(heading(headingLevel, 'Index'));
    md.push(context.reflectionIndex(reflection, false, headingLevel + 1));
  }

  if (hasTOC(reflection)) {
    md.push(heading(headingLevel, 'Table of contents'));
    md.push(context.reflectionIndex(reflection, true, headingLevel + 1));
  }

  md.push(context.members(reflection, headingLevel));

  return md.join('\n\n');
}
