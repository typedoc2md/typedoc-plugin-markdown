import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { heading, unorderedList } from '../../support/els';

/**
 * Represents a top level reflection
 * @param context
 * @param reflection
 * @returns
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
    !reflection.kindOf([
      ReflectionKind.Module,
      ReflectionKind.Project,
      ReflectionKind.Namespace,
    ]) &&
    reflection.sources
  ) {
    md.push(context.sources(reflection));
  }

  if (reflection.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.typeParametersTable(reflection.typeParameters));
  }

  if (
    !context.options.getValue('hideHierarchy') &&
    reflection.typeHierarchy?.next
  ) {
    md.push(heading(headingLevel, 'Hierarchy'));
    md.push(context.hierarchy(reflection.typeHierarchy));
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
    md.push(context.memberIndex(reflection, headingLevel));
  }

  md.push(context.members(reflection, headingLevel));

  return md.join('\n\n');
}
