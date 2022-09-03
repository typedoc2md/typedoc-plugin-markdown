import * as Handlebars from 'handlebars';
import { ReferenceType } from 'typedoc';
import { MarkdownTheme } from '../../theme';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    'attemptExternalResolution',
    function (type: ReferenceType) {
      if (theme.owner.attemptExternalResolution) {
        return theme.owner.attemptExternalResolution(type);
      } else {
        return type.externalUrl;
      }
    },
  );
}
