import { TypeOperatorType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { italic } from '../../support/els';

export function typeOperatorType(
  context: MarkdownThemeRenderContext,
  model: TypeOperatorType,
): string {
  return `${italic(model.operator)} ${context.someType(model.target)}`;
}
