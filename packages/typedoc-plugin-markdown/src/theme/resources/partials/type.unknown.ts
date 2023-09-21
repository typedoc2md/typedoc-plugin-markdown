import { UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
