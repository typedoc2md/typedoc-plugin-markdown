import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
  emphasis: boolean,
) {
  return unionType.types
    .map((unionType) => context.partials.someType(unionType, 'none', emphasis))
    .join(` \\| `);
}
