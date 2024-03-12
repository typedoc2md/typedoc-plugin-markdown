import { heading, link } from '@plugin/theme/lib/markdown';
import { escapeChars } from '@plugin/theme/lib/utils';
import { DeclarationReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders the sources section of a member.
 *
 * @category Member Partials
 */
export function sources(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection | SignatureReflection,
  headingLevel: number,
): string {
  const md: string[] = [];

  if (headingLevel !== -1) {
    md.push(heading(headingLevel, context.helpers.getText('label.source')));
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
