import { backTicks } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { ReflectionType } from 'typedoc';

/**
 * @category Type Partials
 */
export function reflectionType(
  this: MarkdownThemeContext,
  model: ReflectionType,
  options?: { foreCollpase?: boolean },
): string {
  const root = model instanceof ReflectionType ? model.declaration : model;
  if (root.signatures) {
    return this.partials.functionType(root.signatures);
  }

  const expandObjects =
    !options?.foreCollpase &&
    (this.options.getValue('expandObjects') as boolean);

  return expandObjects
    ? this.partials.declarationType(root)
    : backTicks('object');
}
