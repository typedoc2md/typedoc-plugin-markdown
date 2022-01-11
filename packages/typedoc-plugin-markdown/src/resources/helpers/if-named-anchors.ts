import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc';
import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'ifNamedAnchors',
    function (this: PageEvent, options: Handlebars.HelperOptions) {
      return context.options.namedAnchors
        ? options.fn(this)
        : options.inverse(this);
    },
  );
}
