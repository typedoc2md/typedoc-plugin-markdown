import { DeclarationReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks, bold, codeBlock } from '../markdown';
import { escapeChars, stripComments, stripLineBreaks } from '../utils';

export function declarationMemberIdentifier(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  const md: string[] = [];

  const useCodeBlocks = context.options.getValue('useCodeBlocks');

  const declarationType = context.helpers.getDeclarationType(reflection);

  const prefix: string[] = [];

  const modifiers = reflection.flags.filter(
    (flag) => flag !== 'Optional' && !reflection.flags.isRest,
  );

  if (modifiers.length) {
    prefix.push(
      modifiers.map((flag) => bold(backTicks(flag.toLowerCase()))).join(' '),
    );
  }

  if (reflection.flags.isRest) {
    prefix.push('...');
  }

  const keyword = context.helpers.getKeyword(reflection.kind);

  if (useCodeBlocks && context.helpers.isGroupKind(reflection) && keyword) {
    prefix.push(keyword);
  }

  if (prefix.length) {
    md.push(prefix.join(' ') + ' ');
  }

  const name: string[] = [];

  if (reflection.getSignature) {
    name.push(backTicks('get') + ' ');
  }

  if (reflection.setSignature) {
    name.push(backTicks('set') + ' ');
  }
  const nameParts = reflection.name.split('.');
  name.push(bold(escapeChars(nameParts[nameParts.length - 1])));

  if (reflection.typeParameters) {
    name.push(
      `\\<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  if (reflection.flags.isOptional) {
    name.push('?');
  }

  if (declarationType) {
    name.push(': ');
  }

  md.push(name.join(''));

  if (declarationType) {
    md.push(context.partials.someType(declarationType));
  }

  if (reflection.defaultValue && reflection.defaultValue !== '...') {
    md.push(
      ` = \`${stripLineBreaks(stripComments(reflection.defaultValue))}\``,
    );
  }

  if (useCodeBlocks) {
    md.push(';');
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
