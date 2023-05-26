import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
): string {
  return unionType.types
    .map((unionType) => context.someType(unionType))
    .join(` \\| `);
}
