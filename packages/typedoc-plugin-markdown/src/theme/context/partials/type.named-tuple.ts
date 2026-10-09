import { backTicks } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { NamedTupleMember } from 'typedoc';

export function namedTupleType(
  this: MarkdownThemeContext,
  model: NamedTupleMember,
): string {
  return `${backTicks(`${model.name}${model.isOptional ? '?' : ''}`)}: ${this.partials.someType(model.element)}`;
}
