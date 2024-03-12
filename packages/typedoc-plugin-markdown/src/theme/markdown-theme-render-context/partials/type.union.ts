import { UnionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an UnionType model to a string.
 *
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
