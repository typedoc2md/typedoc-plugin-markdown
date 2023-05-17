import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { italic } from '../../support/els';

export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
): string {
  return `${italic('typeof')} ${context.someType(queryType.queryType)}`;
}
