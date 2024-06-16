import { heading } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function memberContainer(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number; nested?: boolean },
): string {
  const md: string[] = [];

  if (
    !model.hasOwnDocument &&
    model.url &&
    this.options.getValue('useHTMLAnchors')
  ) {
    md.push(`<a id="${model.anchor}" name="${model.anchor}"></a>`);
  }

  if (
    !model.hasOwnDocument &&
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
