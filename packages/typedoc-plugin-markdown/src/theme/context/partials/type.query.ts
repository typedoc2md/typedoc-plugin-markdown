import { italic } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { QueryType } from 'typedoc';

export function queryType(
  this: MarkdownThemeContext,
  model: QueryType,
): string {
  return `${italic('typeof')} ${this.partials.someType(model.queryType)}`;
}
