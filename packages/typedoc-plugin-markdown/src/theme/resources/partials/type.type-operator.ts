import { TypeOperatorType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${model.operator} ${context.partials.someType(model.target)}`;
}
