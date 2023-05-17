import { ReflectionType } from 'typedoc';
import { Collapse } from '../../models';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';

export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  collapse: Collapse,
): string {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return collapse === 'function' || collapse === 'all'
      ? backTicks('Function')
      : context.functionType(root.signatures);
  }
  return (collapse === 'object' && !root.indexSignature) || collapse === 'all'
    ? backTicks('object')
    : context.declarationType(root);
}
