import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { UnionType } from 'typedoc';

export function unionType(
  this: MarkdownThemeContext,
  model: UnionType,
): string {
  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const typesOut = model.types.map((unionType) =>
    this.partials.someType(unionType, { forceCollapse: true }),
  );
  const shouldFormat =
    useCodeBlocks &&
    (typesOut?.join('').length > 70 || typesOut?.join('').includes('\n'));
  const md = typesOut.join(shouldFormat ? `\n  \\| ` : ` \\| `);
  return shouldFormat ? `\n  \\| ` + md : md;
}
