import { QueryType } from 'typedoc';
import { italic } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
) {
  return `${italic('typeof')} ${context.partials.someType(
    queryType.queryType,
  )}`;
}
