import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReflectionKind, SignatureReflection } from 'typedoc';

export function signature(
  this: MarkdownThemeContext,
  model: SignatureReflection,
  options: {
    headingLevel: number;
    nested?: boolean;
    accessor?: string;
    multipleSignatures?: boolean;
  },
): string {
  const md: string[] = [];

  if (!options.nested) {
    md.push(
      this.partials.signatureTitle(model, {
        accessor: options.accessor,
      }),
    );
  }

  const modelComments = model.comment || model.parent?.comment;

  if (modelComments) {
    md.push(
      this.partials.comment(modelComments, {
        headingLevel: options.headingLevel,
        showTags: false,
      }),
    );
  }

  if (!options.multipleSignatures && model.parent?.documents) {
    md.push(
      this.partials.documents(model?.parent, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (
    model.typeParameters?.length &&
    model.kind !== ReflectionKind.ConstructorSignature
  ) {
    md.push(
      heading(
        options.headingLevel,
        this.internationalization.kindPluralString(
          ReflectionKind.TypeParameter,
        ),
      ),
    );
    if (this.helpers.useTableFormat('parameters')) {
      md.push(this.partials.typeParametersTable(model.typeParameters));
    } else {
      md.push(this.partials.typeParametersList(model.typeParameters));
    }
  }

  if (model.parameters?.length) {
    md.push(
      heading(
        options.headingLevel,
        this.internationalization.kindPluralString(ReflectionKind.Parameter),
      ),
    );
    if (this.helpers.useTableFormat('parameters')) {
      md.push(this.partials.parametersTable(model.parameters));
    } else {
      md.push(this.partials.parametersList(model.parameters));
    }
  }

  if (model.type) {
    md.push(
      this.partials.signatureReturns(model, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  if (modelComments) {
    md.push(
      this.partials.comment(modelComments, {
        headingLevel: options.headingLevel,
        showSummary: false,
      }),
    );
  }

  md.push(
    this.partials.inheritance(model, { headingLevel: options.headingLevel }),
  );

  if (
    !options.nested &&
    model.sources &&
    !this.options.getValue('disableSources')
  ) {
    md.push(
      this.partials.sources(model, { headingLevel: options.headingLevel }),
    );
  }

  return md.join('\n\n');
}
