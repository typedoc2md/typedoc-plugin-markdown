import { backTicks } from 'libs/markdown';
import { MarkdownThemeContext } from 'public-api';
import { SomeType } from 'typedoc';

export function getHierarchyType(
  this: MarkdownThemeContext,
  model: SomeType,
  options?: { isTarget: boolean },
) {
  return options?.isTarget
    ? backTicks(model.toString())
    : this.partials.someType(model);
}
