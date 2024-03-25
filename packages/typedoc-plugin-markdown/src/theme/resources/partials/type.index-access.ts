import { MarkdownThemeRenderContext } from '@theme/render-context';
import { IndexedAccessType } from 'typedoc';

/**
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
