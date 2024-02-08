import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading } from '../markdown';

export function accessorMember(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (declaration.getSignature) {
    md.push(
      context.partials.signatureMemberIdentifier(declaration.getSignature, {
        accessor: 'get',
      }),
    );
    if (declaration.getSignature.comment) {
      md.push(
        context.partials.comment(
          declaration.getSignature.comment,
          headingLevel,
        ),
      );
    }
  }
  if (declaration.setSignature) {
    md.push(
      context.partials.signatureMemberIdentifier(declaration.setSignature, {
        accessor: 'set',
      }),
    );
    if (declaration.setSignature.comment) {
      md.push(
        context.partials.comment(
          declaration.setSignature.comment,
          headingLevel,
        ),
      );
    }
  }

  if (declaration.setSignature?.parameters?.length) {
    md.push(
      heading(headingLevel, context.text.getText('kind.parameter.plural')),
    );
    if (context.options.getValue('parametersFormat') === 'table') {
      md.push(
        context.partials.parametersTable(declaration.setSignature.parameters),
      );
    } else {
      md.push(
        context.partials.parametersList(declaration.setSignature.parameters),
      );
    }
  }

  if (declaration.getSignature?.type) {
    md.push(
      context.partials.signatureMemberReturns(
        declaration.getSignature,
        headingLevel,
      ),
    );
  }

  const showSources = declaration?.parent?.kind !== ReflectionKind.TypeLiteral;

  if (showSources && !context.options.getValue('disableSources')) {
    if (declaration.getSignature?.sources) {
      md.push(context.partials.sources(declaration.getSignature, headingLevel));
    } else if (declaration.setSignature?.sources) {
      md.push(context.partials.sources(declaration.setSignature, headingLevel));
    }
  }

  return md.join('\n\n');
}
