import { heading, unorderedList } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection } from 'typedoc';

/**
 * Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.
 *
 * @category Member Partials
 */
export function memberWithGroups(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.comment) {
    md.push(
      this.partials.comment(model.comment, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeHierarchy?.next) {
    md.push(
      this.partials.hierarchy(model.typeHierarchy, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (model.typeParameters?.length) {
    md.push(
      heading(options.headingLevel, this.getText('kind.typeParameter.plural')),
    );
    if (this.options.getValue('parametersFormat') === 'table') {
      md.push(this.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(this.partials.typeParametersList(model.typeParameters));
    }
  }

  if (model.implementedTypes?.length) {
    md.push(heading(options.headingLevel, this.getText('label.implements')));
    md.push(
      unorderedList(
        model.implementedTypes.map((implementedType) =>
          this.partials.someType(implementedType),
        ),
      ),
    );
  }

  if ('signatures' in model && model.signatures?.length) {
    model.signatures.forEach((signature) => {
      md.push(
        this.partials.signature(signature, {
          headingLevel: options.headingLevel,
        }),
      );
    });
  }

  if ('indexSignature' in model && model.indexSignature) {
    md.push(heading(options.headingLevel, this.getText('label.indexable')));
    md.push(this.partials.indexSignature(model.indexSignature));
  }

  if (model?.groups?.some((group) => group.allChildrenHaveOwnDocument())) {
    md.push(heading(options.headingLevel, this.getText('label.index')));
    md.push(
      this.partials.reflectionIndex(model, {
        headingLevel: options.headingLevel + 1,
      }),
    );
  }

  md.push(this.partials.body(model, { headingLevel: options.headingLevel }));

  return md.join('\n\n');
}
