import { escapeChars } from '@plugin/theme/lib/utils';
import { UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Transforms an UnknownType model to a string.
 *
 * @category Type Partials
 */
export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
