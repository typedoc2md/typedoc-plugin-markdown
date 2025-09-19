import { backTicks, strikeThrough } from '@plugin/libs/markdown/index.js';
import { encodeAngleBrackets, escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function memberTitle(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const md: string[] = [];
  const name: string[] = [];

  if (model?.kind === ReflectionKind.Class && model.flags?.isAbstract) {
    name.push(this.helpers.getReflectionFlags(model.flags) + ' ');
  }

  const modelName = this.options.getValue('useHTMLEncodedBrackets')
    ? encodeAngleBrackets(model.name)
    : model.name;

  name.push(
    `${/\\/.test(model.name) ? backTicks(model.name) : escapeChars(modelName)}`,
  );

  if (this.helpers.hasSignatures(model)) {
    name.push('()');
  }

  if (model.flags?.isOptional) {
    name.push('?');
  }

  if (model.isDeprecated && model.isDeprecated()) {
    md.push(strikeThrough(name.join('')));
  } else {
    md.push(name.join(''));
  }

  return md.join(': ');
}
