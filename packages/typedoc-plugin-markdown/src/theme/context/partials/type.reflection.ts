import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ReflectionType } from 'typedoc';

export function reflectionType(
  this: MarkdownThemeContext,
  model: ReflectionType,
  options?: { forceCollapse?: boolean },
): string {
  const expandObjects =
    options?.forceCollapse || this.options.getValue('expandObjects');

  if (
    model.declaration?.signatures?.length === 1 &&
    !model.declaration.children
  ) {
    return this.partials.functionType(model.declaration.signatures);
  }

  if (expandObjects || model.declaration.signatures?.length) {
    return this.partials.declarationType(model.declaration, options);
  }

  return backTicks('object');
}
