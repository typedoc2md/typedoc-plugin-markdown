import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { NamedTupleMember } from 'typedoc';

export function namedTupleType(
  this: MarkdownThemeContext,
  model: NamedTupleMember,
): string {
  return this.partials.someType(model.element);
}
