import { heading, unorderedList } from '@plugin/theme/lib/markdown';
import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 *
 * @category Member Partials
 */
export function memberWithGroups(
  context: MarkdownThemeRenderContext,
  model: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (model.comment) {
    md.push(context.partials.comment(model.comment, { headingLevel }));
  }

  if (model.typeHierarchy?.next) {
    md.push(context.partials.hierarchy(model.typeHierarchy, headingLevel));
  }

  if (model.typeParameters) {
    md.push(
      heading(
        headingLevel,
        context.helpers.getText('kind.typeParameter.plural'),
      ),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(context.partials.typeParametersList(model.typeParameters));
    }
  }

  if (model.implementedTypes) {
    md.push(heading(headingLevel, context.helpers.getText('label.implements')));
    md.push(
      unorderedList(
        model.implementedTypes.map((implementedType) =>
          context.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in model && model.signatures) {
    model.signatures.forEach((signature) => {
      md.push(context.partials.signature(signature, headingLevel));
    });
  }

  if ('indexSignature' in model && model.indexSignature) {
    md.push(heading(headingLevel, context.helpers.getText('label.indexable')));
    md.push(context.partials.indexSignature(model.indexSignature));
  }

  if (model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    md.push(heading(headingLevel, context.helpers.getText('label.index')));
    md.push(context.partials.reflectionIndex(model, headingLevel + 1));
  }

  md.push(context.partials.body(model, headingLevel));

  return md.join('\n\n');
}
