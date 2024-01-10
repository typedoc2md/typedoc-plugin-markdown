import { ReflectionKind, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../../../support/elements';

/**
 * @category Partials
 */
export function signatureMember(
  context: MarkdownThemeRenderContext,
  signature: SignatureReflection,
  headingLevel: number,
  nested = false,
  accessor?: string,
): string {
  const md: string[] = [];

  if (!nested) {
    md.push(
      context.signatureMemberIdentifier(signature, {
        accessor,
      }),
    );
  }

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, true, false));
  }

  if (
    signature.typeParameters?.length &&
    !signature.kindOf(ReflectionKind.ConstructorSignature)
  ) {
    md.push(
      heading(
        headingLevel,
        context.getTextContent('kind.typeParameter.plural'),
      ),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.typeParametersTable(signature.typeParameters));
    } else {
      md.push(
        context.typeParametersList(signature.typeParameters, headingLevel + 1),
      );
    }
  }

  if (signature.parameters?.length) {
    md.push(
      heading(headingLevel, context.getTextContent('kind.parameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.parametersTable(signature.parameters));
    } else {
      md.push(context.parametersList(signature.parameters));
    }
  }

  if (signature.type) {
    md.push(context.signatureMemberReturns(signature, headingLevel));
  }

  md.push(context.inheritance(signature, headingLevel));

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, false, true));
  }

  if (
    !nested &&
    signature.sources &&
    !context.options.getValue('disableSources')
  ) {
    md.push(context.sources(signature, headingLevel));
  }

  return md.join('\n\n');
}
