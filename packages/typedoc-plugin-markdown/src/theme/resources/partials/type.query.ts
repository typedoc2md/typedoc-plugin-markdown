import { italic } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { QueryType } from 'typedoc';

/**
 * @category Type Partials
 */
export function queryType(
  context: MarkdownThemeRenderContext,
  model: QueryType,
): string {
  return `${italic('typeof')} ${context.partials.someType(model.queryType)}`;
}
