import { italic } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
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
