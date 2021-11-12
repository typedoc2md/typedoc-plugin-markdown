import * as Handlebars from 'handlebars';
import type * as ts from 'typescript';

import { MarkdownTheme } from '../../theme';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    'attemptExternalResolution',
    function (symbol: ts.Symbol | undefined) {
      return theme.owner.attemptExternalResolution(symbol);
    },
  );
}
