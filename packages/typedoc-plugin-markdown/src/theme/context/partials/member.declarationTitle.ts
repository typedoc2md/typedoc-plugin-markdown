import { backTicks, bold, codeBlock } from 'libs/markdown';
import { escapeChars } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection } from 'typedoc';

export function declarationTitle(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const md: string[] = [];

  const useCodeBlocks = this.options.getValue('useCodeBlocks');

  const declarationType = this.helpers.getDeclarationType(model);

  const prefix: string[] = [];

  const flagsString = this.helpers.getReflectionFlags(model.flags);

  if (flagsString.length) {
    prefix.push(flagsString);
  }

  if (model.flags.isRest) {
    prefix.push('...');
  }

  const keyword = this.helpers.getKeyword(model.kind);

  if (useCodeBlocks && keyword) {
    prefix.push(keyword);
  }

  const prefixes = prefix.filter((prefix) => prefix.length > 0);

  if (prefixes.length) {
    md.push(prefixes.join(' ') + ' ');
  }

  const name: string[] = [];

  if (model.getSignature) {
    name.push(backTicks('get') + ' ');
  }

  if (model.setSignature) {
    name.push(backTicks('set') + ' ');
  }

  const nameParts = model.name.split('.');

  const declarationName =
    Boolean(model.escapedName) && nameParts.length > 1
      ? nameParts[nameParts.length - 1]
      : model.name;

  name.push(
    /[\\`]/.test(declarationName)
      ? escapeChars(declarationName)
      : bold(escapeChars(declarationName)),
  );

  if (model.typeParameters) {
    name.push(
      `\\<${model.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  if (declarationType) {
    name.push(': ');
  }

  md.push(name.join(''));

  if (declarationType) {
    md.push(this.partials.someType(declarationType));
  }

  if (
    model.defaultValue &&
    model.defaultValue !== '...' &&
    model.defaultValue !== model.name
  ) {
    md.push(` = \`${model.defaultValue}\``);
  }

  if (useCodeBlocks) {
    md.push(';');
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
