import { DeclarationReflection, SomeType } from 'typedoc';
import { Collapse } from '../../models';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';
import { getDeclarationType } from '../../support/helpers';

export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
  collapse: Collapse = 'none',
): string {
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
      const obj = context.someType(declarationIndexSignature.type as SomeType);
      indexSignature = `${key}: ${obj}; `;
    }
    const types =
      declarationReflection.children &&
      declarationReflection.children.map((obj) => {
        return `${context.declarationMemberName(
          obj,
          false,
        )}: ${context.someType(getDeclarationType(obj) as SomeType)};`;
      });
    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types ? `\\{${types.join(' ')}}` : '\\{}';
  }
  return '\\{}';
}
