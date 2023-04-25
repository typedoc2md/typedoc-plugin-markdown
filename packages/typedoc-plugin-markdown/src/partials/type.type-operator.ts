import { TypeOperatorType } from 'typedoc';
import { italic } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
) {
  return `${italic(model.operator)} ${context.partials.someType(model.target)}`;
}
