import { MarkdownThemeContext } from '@plugin/theme';
import { IndexedAccessType } from 'typedoc';

/**
 * @category Type Partials
 */
export function indexAccessType(
  this: MarkdownThemeContext,
  model: IndexedAccessType,
): string {
  const md: string[] = [];
  if (model.objectType) {
    md.push(this.partials.someType(model.objectType));
  }
  if (model.indexType) {
    md.push(`\\[${this.partials.someType(model.indexType)}\\]`);
  }
  return md.join('');
}
