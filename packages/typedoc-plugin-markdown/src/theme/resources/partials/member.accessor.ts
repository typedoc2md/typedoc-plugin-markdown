import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function accessorMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (declaration.getSignature) {
    md.push(
      context.signatureMemberIdentifier(declaration.getSignature, {
        accessor: 'get',
      }),
    );
    if (declaration.getSignature.comment) {
      md.push(context.comment(declaration.getSignature.comment, headingLevel));
    }
  }
  if (declaration.setSignature) {
    md.push(
      context.signatureMemberIdentifier(declaration.setSignature, {
        accessor: 'set',
      }),
    );
    if (declaration.setSignature.comment) {
      md.push(context.comment(declaration.setSignature.comment, headingLevel));
    }
  }

  if (declaration.setSignature?.parameters?.length) {
    md.push(
      heading(headingLevel, context.getTextContent('kind.parameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.parametersTable(declaration.setSignature.parameters));
    } else {
      md.push(context.parametersList(declaration.setSignature.parameters));
    }
  }

  if (declaration.getSignature?.type) {
    md.push(
      context.signatureMemberReturns(declaration.getSignature, headingLevel),
    );
  }

  const showSources = !declaration?.parent?.kindOf(ReflectionKind.TypeLiteral);

  if (showSources && !context.options.getValue('disableSources')) {
    if (declaration.getSignature?.sources) {
      md.push(context.sources(declaration.getSignature, headingLevel));
    } else if (declaration.setSignature?.sources) {
      md.push(context.sources(declaration.setSignature, headingLevel));
    }
  }

  return md.join('\n\n');
}
