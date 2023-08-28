import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import {
  backTicks,
  bold,
  heading,
  unorderedList,
} from '../../../support/elements';
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

  if (reflection.flags.isAbstract) {
    md.push(bold(backTicks('abstract')));
  }

  if (reflection.comment) {
    md.push(context.comment(reflection.comment, headingLevel));
  }

  if (reflection.typeHierarchy?.next) {
    md.push(context.memberHierarchy(reflection.typeHierarchy, headingLevel));
  }

  if (!reflection.kindOf(ReflectionKind.Class) && reflection.typeParameters) {
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

  if (hasIndex(reflection) || hasTOC(reflection, context.options)) {
    md.push(heading(headingLevel, 'Index'));
    md.push(context.reflectionIndex(reflection, headingLevel + 1));
  }

  md.push(context.members(reflection, headingLevel));

  return md.join('\n\n');
}
