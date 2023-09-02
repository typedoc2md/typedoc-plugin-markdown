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
  showSources = true,
  accessor?: string,
): string {
  const md: string[] = [];

  if (showSources) {
    md.push(context.signatureMemberIdentifier(signature, accessor));
  }

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, true, false));
  }

  if (
    signature.typeParameters?.length &&
    !signature.kindOf(ReflectionKind.ConstructorSignature)
  ) {
    md.push(heading(headingLevel, 'Type parameters'));
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.typeParametersTable(signature.typeParameters));
    } else {
      md.push(
        context.typeParametersList(signature.typeParameters, headingLevel + 1),
      );
    }
  }

  if (signature.parameters?.length && showSources) {
    md.push(heading(headingLevel, 'Parameters'));
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(context.parametersTable(signature.parameters));
    } else {
      md.push(context.parametersList(signature.parameters));
    }
  }

  if (signature.type && showSources) {
    md.push(context.signatureMemberReturns(signature, headingLevel));
  }

  md.push(context.inheritance(signature, headingLevel));

  if (signature.comment) {
    md.push(context.comment(signature.comment, headingLevel, false, true));
  }

  if (showSources && signature.sources) {
    md.push(context.sources(signature, headingLevel));
  }

  return md.join('\n\n');
}
