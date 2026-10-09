import { heading } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { getAnchoredTitle } from '@plugin/theme/lib/index.js';
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

  const isTitled =
    !this.router.hasOwnDocument(model) &&
    ![ReflectionKind.Constructor].includes(model.kind);

  const { htmlAnchor, title } = getAnchoredTitle(
    this,
    isTitled ? this.partials.memberTitle(model) : '',
    anchor,
  );

  if (htmlAnchor) {
    md.push(htmlAnchor);
  }

  if (isTitled) {
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
