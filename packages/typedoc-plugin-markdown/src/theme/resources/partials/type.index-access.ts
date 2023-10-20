import { IndexedAccessType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function indexAccessType(
  context: MarkdownThemeRenderContext,
  model: IndexedAccessType,
): string {
  const md: string[] = [];
  if (model.objectType) {
    md.push(context.someType(model.objectType));
  }
  if (model.indexType) {
    md.push(`\\[${context.someType(model.indexType)}\\]`);
  }
  return md.join('');
}
