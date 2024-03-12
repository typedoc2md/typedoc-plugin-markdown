import { backTicks } from '@plugin/theme/lib/markdown';
import { ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an ReflectionType model to a string.
 *
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
