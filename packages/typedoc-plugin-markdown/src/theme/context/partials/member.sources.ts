import { link } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, SignatureReflection } from 'typedoc';

export function sources(
  this: MarkdownThemeContext,
  model: DeclarationReflection | SignatureReflection,
  options?: { hideLabel: boolean },
): string {
  const md: string[] = [];

  if (!options?.hideLabel) {
    md.push(`${this.i18n.theme_defined_in()}:`);
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

  return md.join(' ');
}
