import { ReflectionKind, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../markdown';

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
      context.partials.signatureMemberIdentifier(signature, {
        accessor,
      }),
    );
  }

  if (signature.comment) {
    md.push(
      context.partials.comment(signature.comment, headingLevel, true, false),
    );
  }

  if (
    signature.typeParameters?.length &&
    !signature.kindOf(ReflectionKind.ConstructorSignature)
  ) {
    md.push(
      heading(headingLevel, context.getText('kind.typeParameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.typeParametersTable(signature.typeParameters));
    } else {
      md.push(context.partials.typeParametersList(signature.typeParameters));
    }
  }

  if (signature.parameters?.length) {
    md.push(heading(headingLevel, context.getText('kind.parameter.plural')));
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.partials.parametersTable(signature.parameters));
    } else {
      md.push(context.partials.parametersList(signature.parameters));
    }
  }

  if (signature.type) {
    md.push(context.partials.signatureMemberReturns(signature, headingLevel));
  }

  md.push(context.partials.inheritance(signature, headingLevel));

  if (signature.comment) {
    md.push(
      context.partials.comment(signature.comment, headingLevel, false, true),
    );
  }

  if (
    !nested &&
    signature.sources &&
    !context.options.getValue('disableSources')
  ) {
    md.push(context.partials.sources(signature, headingLevel));
  }

  return md.join('\n\n');
}
