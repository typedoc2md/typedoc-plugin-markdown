import { heading } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * @category Member Partials
 */
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

  if (!model.hasOwnDocument && !(model.kind === ReflectionKind.Constructor)) {
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
