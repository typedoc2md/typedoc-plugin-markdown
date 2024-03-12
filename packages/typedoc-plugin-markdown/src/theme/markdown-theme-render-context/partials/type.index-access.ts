import { IndexedAccessType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an IndexedAccessType model to a string.
 *
 * @category Type Partials
 */
export function indexAccessType(
  context: MarkdownThemeRenderContext,
  model: IndexedAccessType,
): string {
  const md: string[] = [];
  if (model.objectType) {
    md.push(context.partials.someType(model.objectType));
  }
  if (model.indexType) {
    md.push(`\\[${context.partials.someType(model.indexType)}\\]`);
  }
  return md.join('');
}
