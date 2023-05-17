import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { bold, link } from '../../support/els';

import { escapeChars } from '../../support/utils';

export function sources(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
): string {
  const md = [bold('Source:')];
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
