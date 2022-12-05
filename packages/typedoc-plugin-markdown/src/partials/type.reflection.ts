import { ReflectionType } from 'typedoc';
import { Collapse } from '../models';
import { MarkdownThemeRenderContext } from '../theme-context';

export function reflectionType(
  context: MarkdownThemeRenderContext,
  reflectionType: ReflectionType,
  collapse: Collapse,
) {
  const root =
    reflectionType instanceof ReflectionType
      ? reflectionType.declaration
      : reflectionType;
  if (root.signatures) {
    return collapse === 'function' || collapse === 'all'
      ? `\`fn\``
      : context.partials.functionType(root.signatures);
  }
  return collapse === 'object' || collapse === 'all'
    ? `\`Object\``
    : context.partials.declarationType(root);
}
