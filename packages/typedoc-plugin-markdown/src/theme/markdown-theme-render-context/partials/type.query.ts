import { italic } from '@plugin/theme/lib/markdown';
import { QueryType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an QueryType model to a string.
 *
 * @category Type Partials
 */
export function queryType(
  context: MarkdownThemeRenderContext,
  model: QueryType,
): string {
  return `${italic('typeof')} ${context.partials.someType(model.queryType)}`;
}
