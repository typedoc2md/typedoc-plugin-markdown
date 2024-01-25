import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { italic } from '../markdown';

export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
): string {
  return `${italic('typeof')} ${context.partials.someType(
    queryType.queryType,
  )}`;
}
