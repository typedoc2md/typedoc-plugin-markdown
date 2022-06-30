import { IntrinsicType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';
import { escapeChars } from '../utils';

export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
  emphasis: boolean,
) {
  return emphasis ? `\`${model.name}\`` : escapeChars(model.name);
}
