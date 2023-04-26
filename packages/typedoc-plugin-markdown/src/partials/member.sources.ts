import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { link } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-render-context';

import { escapeChars } from '../support/utils';

export function sources(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
) {
  const md = ['Defined in:'];
  reflection.sources?.forEach((source) => {
    if (source.url) {
      md.push(
        link(`${escapeChars(source.fileName)}:${source.line}`, source.url),
      );
    } else {
      md.push(`${escapeChars(source.fileName)}:${source.line}`);
    }
  });
  return md.join(' ');
}
