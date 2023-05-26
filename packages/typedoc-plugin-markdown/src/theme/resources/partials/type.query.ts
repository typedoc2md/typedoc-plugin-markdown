import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { italic } from '../../../support/elements';

/**
 * @category Partials
 */
export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
): string {
  return `${italic('typeof')} ${context.someType(queryType.queryType)}`;
}
