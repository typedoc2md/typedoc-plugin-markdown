import { IntrinsicType } from 'typedoc';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function intrinsicType(
  context: MarkdownThemeRenderContext,
  model: IntrinsicType,
  emphasis: boolean,
) {
  return emphasis ? `\`${model.name}\`` : escapeChars(model.name);
}
