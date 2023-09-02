import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function unionType(
  context: MarkdownThemeRenderContext,
  unionType: UnionType,
): string {
  const useCodeBlocks = context.options.getValue('identifiersAsCodeBlocks');
  const shouldFormat = useCodeBlocks && unionType.types.length > 4;
  const md = unionType.types
    .map((unionType) => context.someType(unionType))
    .join(shouldFormat ? `\n  \\| ` : ` \\| `);
  return shouldFormat ? `\n  \\| ` + md : md;
}
