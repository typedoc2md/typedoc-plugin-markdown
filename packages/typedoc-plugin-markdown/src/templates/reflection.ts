import { DeclarationReflection, PageEvent } from 'typedoc';
import { heading, unorderedList } from '../support/els';
import { getReflectionHeadingLevel } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(context.partials.header(page));

  const headingLevel = getReflectionHeadingLevel(page.model);

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment));
  }

  if (page.model.typeParameters) {
    md.push(heading(headingLevel, 'Type parameters'));
    md.push(context.partials.typeParameters(page.model.typeParameters));
  }

  if (page.model.typeHierarchy) {
    if (page.model?.typeHierarchy?.next) {
      md.push(heading(headingLevel, 'Hierarchy'));
      md.push(context.partials.hierarchy(page.model.typeHierarchy));
    }
  }
  if (page.model?.implementedTypes) {
    md.push(heading(headingLevel, 'Implements'));
    md.push(
      unorderedList(
        page.model.implementedTypes.map((implementedType) =>
          context.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in page.model && page.model?.signatures) {
    md.push(heading(headingLevel, 'Callable'));
    page.model.signatures.forEach((signature) => {
      md.push(heading(headingLevel + 1, signature.name));
      md.push(context.partials.signatureMember(signature));
    });
  }

  if ('indexSignature' in page.model && page.model.indexSignature) {
    md.push(heading(headingLevel, 'Indexable'));
    md.push(context.partials.indexSignatureTitle(page.model.indexSignature));
  }

  md.push(context.partials.toc(page.model));

  md.push(context.partials.members(page.model));

  return md.join('\n\n');
}
