import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
): string {
  const useCodeBlocks = context.options.getValue('useCodeBlocks');
  const shouldFormat = useCodeBlocks && unionType.types.length > 4;
  const md = unionType.types
    .map((unionType) => context.partials.someType(unionType))
    .join(shouldFormat ? `\n  \\| ` : ` \\| `);
  return shouldFormat ? `\n  \\| ` + md : md;
}
