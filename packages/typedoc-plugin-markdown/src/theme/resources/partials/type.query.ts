import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
): string {
  const { italic } = context.markdown;
  return `${italic('typeof')} ${context.partials.someType(
    queryType.queryType,
  )}`;
}
