import { heading, link } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, SignatureReflection } from 'typedoc';

export function sources(
  this: MarkdownThemeContext,
  model: DeclarationReflection | SignatureReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  if (options.headingLevel !== -1) {
    md.push(heading(options.headingLevel, this.i18n.theme_defined_in()));
  }
  model.sources?.forEach((source, index) => {
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
