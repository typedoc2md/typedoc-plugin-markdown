import { escapeChars } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { UnknownType } from 'typedoc';

/**
 * @category Type Partials
 */
export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
