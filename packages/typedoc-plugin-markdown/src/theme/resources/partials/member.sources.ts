import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { heading, link } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * @category Partials
 */
export function sources(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md = [heading(headingLevel, 'Source')];
  reflection.sources?.forEach((source) => {
    if (source.url) {
      md.push(
        link(`${escapeChars(source.fileName)}:${source.line}`, source.url),
      );
    } else {
      md.push(`${escapeChars(source.fileName)}:${source.line}`);
    }
  });
  return md.join('\n\n');
}
