import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

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
