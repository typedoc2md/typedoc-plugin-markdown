import { DeclarationReflection, SomeType } from 'typedoc';
import { Collapse } from '../models';
import { backTicks } from '../support/els';
import { getDeclarationType } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
  collapse: Collapse = 'none',
) {
  if (collapse === 'object' || collapse === 'all') {
    return backTicks('object');
  }

  if (declarationReflection.indexSignature || declarationReflection.children) {
    let indexSignature = '';
    const declarationIndexSignature = declarationReflection.indexSignature;
    if (declarationIndexSignature) {
      const key = declarationIndexSignature.parameters
        ? declarationIndexSignature.parameters.map(
            (param) => `\`[${param.name}: ${param.type}]\``,
          )
        : '';
      const obj = context.partials.someType(
        declarationIndexSignature.type as SomeType,
      );
      indexSignature = `${key}: ${obj}; `;
    }
    const types =
      declarationReflection.children &&
      declarationReflection.children.map((obj) => {
        return `${context.partials.declarationMemberName(
          obj,
          false,
        )}: ${context.partials.someType(getDeclarationType(obj) as SomeType)};`;
      });
    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types ? `\\{${types.join(' ')}}` : '\\{}';
  }
  return '\\{}';
}
