import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ConditionalType } from 'typedoc';

/**
 * @category Type Partials
 */
export function conditionalType(
  context: MarkdownThemeRenderContext,
  model: ConditionalType,
): string {
  const md: string[] = [];
  if (model.checkType) {
    md.push(context.partials.someType(model.checkType));
  }
  md.push('extends');
  if (model.extendsType) {
    md.push(context.partials.someType(model.extendsType));
  }
  md.push('?');
  if (model.trueType) {
    md.push(context.partials.someType(model.trueType));
  }
  md.push(':');
  if (model.falseType) {
    md.push(context.partials.someType(model.falseType));
  }
  return md.join(' ');
}