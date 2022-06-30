import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
) {
  return `typeof ${context.partials.someType(queryType.queryType)}`;
}
