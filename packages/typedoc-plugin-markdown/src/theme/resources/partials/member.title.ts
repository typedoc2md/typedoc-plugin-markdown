import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../..';

/**
 * @category Partials
 */
export function memberTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  const md: string[] = [];
  const name: string[] = [];
  const { backTicks, strikeThrough } = context.markdown;
  const { escapeChars } = context.utils;

  if (
    reflection?.kind === ReflectionKind.Class &&
    reflection.flags?.includes('Abstract')
  ) {
    name.push(backTicks('abstract') + ' ');
  }

  name.push(
    `${
      reflection.name.startsWith('[') && reflection.signatures?.length
        ? backTicks(reflection.name)
        : escapeChars(reflection.name)
    }`,
  );

  if (reflection.signatures?.length) {
    name.push('()');
  }

  if (reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    name.push(`${`\\<${typeParameters}\\>`}`);
  }

  if (reflection.flags.isOptional) {
    name.push('?');
  }

  if (reflection.isDeprecated && reflection.isDeprecated()) {
    md.push(strikeThrough(name.join('')));
  } else {
    md.push(name.join(''));
  }

  return md.join(': ');
}
