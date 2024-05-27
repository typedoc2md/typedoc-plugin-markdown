import { italic } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ConditionalType } from 'typedoc';

/**
 * @category Type Partials
 */
export function conditionalType(
  this: MarkdownThemeContext,
  model: ConditionalType,
): string {
  const md: string[] = [];
  if (model.checkType) {
    md.push(this.partials.someType(model.checkType));
  }
  md.push(italic('extends'));
  if (model.extendsType) {
    md.push(this.partials.someType(model.extendsType));
  }
  md.push('?');
  if (model.trueType) {
    md.push(this.partials.someType(model.trueType));
  }
  md.push(':');
  if (model.falseType) {
    md.push(this.partials.someType(model.falseType));
  }
  return md.join(' ');
}
