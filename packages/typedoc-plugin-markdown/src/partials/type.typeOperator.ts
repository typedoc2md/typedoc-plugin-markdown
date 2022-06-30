import { TypeOperatorType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';

export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
) {
  return `${model.operator} ${context.partials.someType(model.target)}`;
}
