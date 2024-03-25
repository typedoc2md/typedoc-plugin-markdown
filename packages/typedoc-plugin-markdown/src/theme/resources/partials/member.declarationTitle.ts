import { backTicks, bold, codeBlock } from '@theme/lib/markdown';
import { escapeChars, stripComments } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { DeclarationReflection } from 'typedoc';

/**
 * Remders a declaration title.
 *
 * @category Member Partials
 */
export function declarationTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  const md: string[] = [];

  const useCodeBlocks = context.options.getValue('useCodeBlocks');

  const declarationType = context.helpers.getDeclarationType(reflection);

  const prefix: string[] = [];

  if (reflection.flags.length) {
    prefix.push(
      reflection.flags
        .map((flag) => bold(backTicks(flag.toLowerCase())))
        .join(' '),
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
  name.push(
    bold(
      escapeChars(
        reflection.escapedName?.includes('.')
          ? reflection.name
          : nameParts[nameParts.length - 1],
      ),
    ),
  );

  if (reflection.typeParameters) {
    name.push(
      `\\<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  if (declarationType) {
    name.push(': ');
  }

  md.push(name.join(''));

  if (declarationType) {
    md.push(context.partials.someType(declarationType));
  }

  if (
    reflection.defaultValue &&
    reflection.defaultValue !== '...' &&
    reflection.defaultValue !== reflection.name
  ) {
    md.push(` = \`${stripComments(reflection.defaultValue)}\``);
  }

  if (useCodeBlocks) {
    md.push(';');
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}
