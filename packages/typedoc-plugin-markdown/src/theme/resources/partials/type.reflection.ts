import { backTicks } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ReflectionType } from 'typedoc';

/**
 * @category Type Partials
 */
export function reflectionType(
  context: MarkdownThemeRenderContext,
  model: ReflectionType,
  foreCollpase = false,
): string {
  const root = model instanceof ReflectionType ? model.declaration : model;
  if (root.signatures) {
    return context.partials.functionType(root.signatures);
  }

  const expandObjects =
    !foreCollpase && (context.options.getValue('expandObjects') as boolean);

  return expandObjects
    ? context.partials.declarationType(root)
    : backTicks('Object');
}
