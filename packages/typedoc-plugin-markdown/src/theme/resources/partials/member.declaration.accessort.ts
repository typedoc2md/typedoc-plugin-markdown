import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../../../support/elements';

/**
 * @category Partials
 */
export function declarationMemberAccessor(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
): string {
  if (declaration.getSignature) {
    return `${backTicks('get')} ${`${declaration.getSignature.name}()`}`;
  } else if (declaration.setSignature) {
    return `${backTicks('set')} ${
      declaration.setSignature.name
    }(${declaration.setSignature.parameters?.map((parameter) => {
      return parameter.type
        ? `${backTicks(parameter.name)}: ${context.someType(
            parameter.type,
            true,
          )}`
        : '';
    })})`;
  }
  return '';
}
