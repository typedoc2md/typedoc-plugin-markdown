import { italic } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { QueryType } from 'typedoc';

export function queryType(
  this: MarkdownThemeContext,
  model: QueryType,
): string {
  return `${italic('typeof')} ${this.partials.someType(model.queryType)}`;
}
