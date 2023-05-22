import { QueryType } from 'typedoc';
import { italic } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function queryType(
  context: MarkdownThemeRenderContext,
  queryType: QueryType,
): string {
  return `${italic('typeof')} ${context.someType(queryType.queryType)}`;
}
