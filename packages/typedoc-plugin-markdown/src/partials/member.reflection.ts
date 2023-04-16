import { DeclarationReflection } from 'typedoc';
import { heading, unorderedList } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

/**
 * Represents a top level reflection
 * @param context
 * @param reflection
 * @returns
 */
export function reflectionMember(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel =
    getReflectionHeadingLevel(
      reflection,
      context.getOption('groupByReflections'),
    ) + 1;

  if (reflection.comment) {
    md.push(context.partials.comment(reflection.comment, headingLevel));
  }

  if (reflection.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(reflection.typeParameters));
  }

  if (!context.getOption('hideHierarchy') && reflection.typeHierarchy?.next) {
    md.push(heading(headingLevel, 'Hierarchy'));
    md.push(context.partials.hierarchy(reflection.typeHierarchy));
  }

  if (reflection.implementedTypes) {
    md.push(heading(headingLevel, 'Implements'));
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
      md.push(context.partials.signatureMember(signature));
    });
  }

  if ('indexSignature' in reflection && reflection.indexSignature) {
    md.push(heading(headingLevel, 'Indexable'));
    md.push(context.partials.indexSignatureTitle(reflection.indexSignature));
  }

  md.push(context.partials.toc(reflection));

  md.push(context.partials.members(reflection));

  return md.join('\n\n');
}
