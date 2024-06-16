import { backTicks, strikeThrough } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind, ReflectionType } from 'typedoc';

export function memberTitle(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const md: string[] = [];
  const name: string[] = [];

  if (model?.kind === ReflectionKind.Class && model.flags?.isAbstract) {
    name.push(this.helpers.getReflectionFlags(model.flags) + ' ');
  }

  name.push(
    `${
      /\\/.test(model.name) ? backTicks(model.name) : escapeChars(model.name)
    }`,
  );

  if (
    model.signatures?.length ||
    (model.type as ReflectionType)?.declaration?.signatures?.length
  ) {
    name.push('()');
  }

  if (model.typeParameters?.length) {
    const typeParameters = model.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    name.push(`${`\\<${typeParameters}\\>`}`);
  }

  if (model.flags.isOptional) {
    name.push('?');
  }

  if (model.isDeprecated && model.isDeprecated()) {
    md.push(strikeThrough(name.join('')));
  } else {
    md.push(name.join(''));
  }

  return md.join(': ');
}
