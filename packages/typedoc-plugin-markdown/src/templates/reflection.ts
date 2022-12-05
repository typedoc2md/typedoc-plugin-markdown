import { DeclarationReflection, PageEvent } from 'typedoc';
import { bold, heading, unorderedList } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionTemplate(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  md.push(context.partials.header(page));

  if (page.model.comment) {
    md.push(context.partials.comment(page.model.comment));
  }

  if (page.model.typeParameters) {
    md.push(bold('Type parameters'));
    md.push(context.partials.typeParameters(page.model.typeParameters));
  }

  if (page.model.typeHierarchy) {
    if (page.model?.typeHierarchy?.next) {
      md.push(bold('Hierarchy'));
      md.push(context.partials.hierarchy(page.model.typeHierarchy));
    }
  }
  if (page.model?.implementedTypes) {
    md.push(bold('Implements'));
    md.push(
      unorderedList(
        page.model.implementedTypes.map((implementedType) =>
          context.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in page.model && page.model?.signatures) {
    md.push(heading(2, 'Callable'));
    page.model.signatures.forEach((signature) => {
      md.push(heading(3, signature.name));
      md.push(context.partials.signatureMember(signature));
    });
  }

  if ('indexSignature' in page.model && page.model.indexSignature) {
    md.push(heading(2, 'Indexable'));
    md.push('context.indexSignaturePartial(props.model.indexSignature)');
  }

  md.push(context.partials.toc(page.model));

  md.push(context.partials.members(page.model));

  return md.join('\n\n');
}
