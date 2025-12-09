import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function memberContainer(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number; nested?: boolean; groupTitle?: string },
): string {
  const md: string[] = [];
  const anchor =
    !this.router.hasOwnDocument(model) && this.router.hasUrl(model)
      ? this.router.getAnchor(model)
      : undefined;

  if (anchor && this.options.getValue('useHTMLAnchors')) {
    md.push(`<a id="${anchor}"></a>`);
  }

  if (
    !this.router.hasOwnDocument(model) &&
    ![ReflectionKind.Constructor].includes(model.kind)
  ) {
    let title = this.partials.memberTitle(model);

    if (anchor && this.options.getValue('useCustomAnchors')) {
      const customAnchorsFormat = this.options.getValue('customAnchorsFormat');

      if (customAnchorsFormat === 'curlyBrace') {
        title = `${title} {#${anchor}}`;
      } else if (customAnchorsFormat === 'escapedCurlyBrace') {
        title = `${title} \\{#${anchor}\\}`;
      } else if (customAnchorsFormat === 'squareBracket') {
        title = `${title} [#${anchor}]`;
      } else {
        throw new Error(`Invalid custom anchors format`);
      }
    }

    md.push(heading(options.headingLevel, title));
  }

  md.push(
    this.partials.member(model, {
      headingLevel: options.headingLevel,
      nested: options.nested,
    }),
  );

  return md.join('\n\n');
}
