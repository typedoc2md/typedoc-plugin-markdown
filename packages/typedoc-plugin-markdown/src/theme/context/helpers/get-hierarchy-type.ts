import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { SomeType } from 'typedoc';

export function getHierarchyType(
  this: MarkdownThemeContext,
  model: SomeType,
  options?: { isTarget: boolean },
): string {
  return options?.isTarget
    ? backTicks(model.toString())
    : this.partials.someType(model);
}
