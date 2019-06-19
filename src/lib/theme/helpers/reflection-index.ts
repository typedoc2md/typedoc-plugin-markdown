import { DeclarationReflection } from 'typedoc';
import { MarkdownPlugin } from '../../plugin';
import { VuePressTheme } from '../theme.vuepress';

export function ifDisplayIndex(this: DeclarationReflection, options: Handlebars.HelperOptions) {
  if (MarkdownPlugin.theme instanceof VuePressTheme) {
    return options.inverse(this);
  }
  return options.fn(this);
}
