import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc';
import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'ifShowBreadcrumbs',
    function (this: PageEvent, options: Handlebars.HelperOptions) {
      return context.options.hideBreadcrumbs
        ? options.inverse(this)
        : options.fn(this);
    },
  );
}
