import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * Renders an accessor member.
 *
 * @category Member Partials
 */
export function accessor(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (model.getSignature) {
    md.push(
      this.partials.signatureTitle(model.getSignature, {
        accessor: 'get',
      }),
    );
    if (model.getSignature.comment) {
      md.push(
        this.partials.comment(model.getSignature.comment, {
          headingLevel: options.headingLevel,
        }),
      );
    }
  }
  if (model.setSignature) {
    md.push(
      this.partials.signatureTitle(model.setSignature, {
        accessor: 'set',
      }),
    );
    if (model.setSignature.comment) {
      md.push(
        this.partials.comment(model.setSignature.comment, {
          headingLevel: options.headingLevel,
        }),
      );
    }
  }

  if (model.setSignature?.parameters?.length) {
    md.push(
      heading(options.headingLevel, this.getText('kind.parameter.plural')),
    );
    if (this.options.getValue('parametersFormat') === 'table') {
      md.push(this.partials.parametersTable(model.setSignature.parameters));
    } else {
      md.push(this.partials.parametersList(model.setSignature.parameters));
    }
  }

  if (model.getSignature?.type) {
    md.push(
      this.partials.signatureReturns(model.getSignature, {
        headingLevel: options.headingLevel,
      }),
    );
  }

  const showSources = model?.parent?.kind !== ReflectionKind.TypeLiteral;

  if (showSources && !this.options.getValue('disableSources')) {
    if (model.getSignature?.sources) {
      md.push(
        this.partials.sources(model.getSignature, {
          headingLevel: options.headingLevel,
        }),
      );
    } else if (model.setSignature?.sources) {
      md.push(
        this.partials.sources(model.setSignature, {
          headingLevel: options.headingLevel,
        }),
      );
    }
  }

  return md.join('\n\n');
}
