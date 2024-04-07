import { italic } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { QueryType } from 'typedoc';

/**
 * @category Type Partials
 */
export function queryType(
  this: MarkdownThemeContext,
  model: QueryType,
): string {
  return `${italic('typeof')} ${this.partials.someType(model.queryType)}`;
}
