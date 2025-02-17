import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function memberContainer(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number; nested?: boolean; groupTitle?: string },
): string {
  const md: string[] = [];

  if (
    !this.router.hasOwnDocument(model) &&
    this.router.hasUrl(model) &&
    this.router.getAnchor(model) &&
    this.options.getValue('useHTMLAnchors')
  ) {
    md.push(`<a id="${this.router.getAnchor(model)}"></a>`);
  }

  if (
    !this.router.hasOwnDocument(model) &&
    ![ReflectionKind.Constructor].includes(model.kind)
  ) {
    md.push(heading(options.headingLevel, this.partials.memberTitle(model)));
  }

  md.push(
    this.partials.member(model, {
      headingLevel: options.headingLevel,
      nested: options.nested,
    }),
  );

  return md.join('\n\n');
}
