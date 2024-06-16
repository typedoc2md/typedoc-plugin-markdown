import { backTicks } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReflectionType } from 'typedoc';

export function reflectionType(
  this: MarkdownThemeContext,
  model: ReflectionType,
  options?: { forceCollapse?: boolean },
): string {
  const root = model instanceof ReflectionType ? model.declaration : model;
  if (root.signatures) {
    return this.partials.functionType(root.signatures);
  }

  const expandObjects =
    !options?.forceCollapse &&
    (this.options.getValue('expandObjects') as boolean);

  return expandObjects
    ? this.partials.declarationType(root)
    : backTicks('object');
}
