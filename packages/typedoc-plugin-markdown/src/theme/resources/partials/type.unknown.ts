import { UnknownType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { escapeChars } from '../utils';

export function unknownType(
  context: MarkdownThemeRenderContext,
  model: UnknownType,
): string {
  return escapeChars(model.name);
}
