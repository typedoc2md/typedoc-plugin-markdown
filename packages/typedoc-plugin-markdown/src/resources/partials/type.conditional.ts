import { ConditionalType } from 'typedoc';
import { italic } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function conditionalType(
  context: MarkdownThemeRenderContext,
  conditionalType: ConditionalType,
) {
  const md: string[] = [];
  if (conditionalType.checkType) {
    md.push(context.partials.someType(conditionalType.checkType));
  }
  md.push(italic('extends'));
  if (conditionalType.extendsType) {
    md.push(context.partials.someType(conditionalType.extendsType));
  }
  md.push('?');
  if (conditionalType.trueType) {
    md.push(context.partials.someType(conditionalType.trueType));
  }
  md.push(':');
  if (conditionalType.falseType) {
    md.push(context.partials.someType(conditionalType.falseType));
  }
  return md.join(' ');
}
