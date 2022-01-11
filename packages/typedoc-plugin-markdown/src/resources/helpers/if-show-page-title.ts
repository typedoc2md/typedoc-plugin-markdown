import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc';
import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'ifShowPageTitle',
    function (this: PageEvent, options: Handlebars.HelperOptions) {
      return context.options.hidePageTitle
        ? options.inverse(this)
        : options.fn(this);
    },
  );
}
