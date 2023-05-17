import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
): string {
  return unionType.types
    .map((unionType) => context.someType(unionType, 'none'))
    .join(` \\| `);
}
