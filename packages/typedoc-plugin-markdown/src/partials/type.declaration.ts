import { DeclarationReflection, SomeType } from 'typedoc';
import { Collapse } from '../models';
import { backTicks, indentBlock } from '../support/els';
import { getPropertyType } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

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
        return `${context.partials.propertyName(
          obj,
        )}: ${context.partials.someType(getPropertyType(obj) as SomeType)};`;
      });
    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return `\\{\n${indentBlock(types ? types.join('\n') : '')}\n}`;
  }
  return '\\{}';
}
