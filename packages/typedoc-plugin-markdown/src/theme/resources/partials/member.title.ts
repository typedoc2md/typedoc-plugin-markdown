import { DeclarationReflection, ReflectionKind, ReflectionType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../..';
import { backTicks, strikeThrough } from '../markdown';
import { escapeChars } from '../utils';

export function memberTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  const md: string[] = [];
  const name: string[] = [];

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

  if (
    reflection.signatures?.length ||
    (reflection.type as ReflectionType)?.declaration?.signatures?.length
  ) {
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
