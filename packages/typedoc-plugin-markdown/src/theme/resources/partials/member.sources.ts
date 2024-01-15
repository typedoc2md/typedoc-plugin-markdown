import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function sources(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];
  const { heading, link } = context.markdown;
  const { escapeChars } = context.utils;
  if (headingLevel !== -1) {
    md.push(heading(headingLevel, context.text.get('label.source')));
  }
  reflection.sources?.forEach((source, index) => {
    if (index === 0) {
      if (source.url) {
        md.push(
          link(`${escapeChars(source.fileName)}:${source.line}`, source.url),
        );
      } else {
        md.push(`${escapeChars(source.fileName)}:${source.line}`);
      }
    }
  });
  return md.join('\n\n');
}
