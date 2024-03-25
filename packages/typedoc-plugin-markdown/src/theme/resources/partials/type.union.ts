import { MarkdownThemeRenderContext } from '@theme/render-context';
import { UnionType } from 'typedoc';

/**
 * @category Type Partials
 */
export function unionType(
  context: MarkdownThemeRenderContext,
  model: UnionType,
): string {
  const useCodeBlocks = context.options.getValue('useCodeBlocks');
  const shouldFormat = useCodeBlocks && model.types.length > 4;
  const md = model.types
    .map((unionType) => context.partials.someType(unionType))
    .join(shouldFormat ? `\n  \\| ` : ` \\| `);
  return shouldFormat ? `\n  \\| ` + md : md;
}
