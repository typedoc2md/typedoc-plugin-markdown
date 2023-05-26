import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';
import { getDeclarationType } from '../../helpers';

/**
 * @category Partials
 */
export function declarationType(
  context: MarkdownThemeRenderContext,
  declarationReflection: DeclarationReflection,
  collapse = false,
): string {
  if (collapse) {
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
        const name: string[] = [];
        if (Boolean(obj.getSignature || Boolean(obj.setSignature))) {
          name.push(context.declarationMemberAccessor(obj));
        } else {
          name.push(backTicks(obj.name));
        }
        return `${name.join(' ')}: ${context.someType(
          getDeclarationType(obj) as SomeType,
        )};`;
      });
    if (indexSignature) {
      types?.unshift(indexSignature);
    }
    return types ? `\\{${types.join(' ')}}` : '\\{}';
  }
  return '\\{}';
}
