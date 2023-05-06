import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
) {
  return unionType.types
    .map((unionType) => context.partials.someType(unionType, 'none'))
    .join(` \\| `);
}
