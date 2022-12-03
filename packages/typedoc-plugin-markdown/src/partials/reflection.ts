import { DeclarationReflection } from 'typedoc';
import { bold, heading, horizontalRule, unorderedList } from '../els';
import { getSecondaryHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflection(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  const headingLevel = getSecondaryHeadingLevel(reflection);

  if (reflection.comment) {
    md.push(context.partials.comment(reflection.comment));
  }

  if (reflection.typeParameters) {
    md.push(bold('Type parameters'));
    md.push(context.partials.typeParameters(reflection.typeParameters));
  }

  if (reflection.typeHierarchy) {
    if (reflection.typeHierarchy?.next) {
      md.push(bold('Hierarchy'));
      md.push(context.partials.hierarchy(reflection.typeHierarchy));
    }
  }
  if (reflection.implementedTypes) {
    md.push(bold('Implements'));
    md.push(
      unorderedList(
        reflection.implementedTypes.map((implementedType) =>
          context.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in reflection && reflection.signatures) {
    md.push(bold('Callable'));
    reflection.signatures.forEach((signature) => {
      md.push(heading(headingLevel + 1, signature.name));
      md.push(context.partials.signatureMember(signature));
    });
  }

  if ('indexSignature' in reflection && reflection.indexSignature) {
    md.push(bold('Indexable'));
    md.push('context.indexSignaturePartial(props.model.indexSignature)');
  }

  md.push(context.partials.toc(reflection));

  md.push(horizontalRule(context));

  md.push(context.partials.members(reflection));

  return md.join('\n\n');
}
