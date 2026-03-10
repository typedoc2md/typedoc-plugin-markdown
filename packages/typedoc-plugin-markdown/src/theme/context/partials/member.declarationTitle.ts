import { backTicks, bold, codeBlock } from '@plugin/libs/markdown/index.js';
import { encodeAngleBrackets, escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

type DeclarationWithOriginalName = DeclarationReflection & {
  originalName?: string;
};

export function declarationTitle(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
): string {
  const md: string[] = [];
  const useCodeBlocks = this.options.getValue('useCodeBlocks');
  const declarationType = this.helpers.getDeclarationType(model);
  const prefix = getPrefix(this, model, useCodeBlocks);
  if (prefix.length) {
    md.push(`${prefix} `);
  }

  md.push(buildDeclarationName(this, model));

  if (declarationType) {
    md.push(this.partials.someType(declarationType));
  } else if (model.kind === ReflectionKind.TypeAlias) {
    const expandObjects = this.options.getValue('expandObjects');
    md.push(
      expandObjects ? this.partials.declarationType(model) : backTicks('object'),
    );
  }

  if (
    model.defaultValue &&
    model.defaultValue !== '...' &&
    model.defaultValue !== model.name
  ) {
    md.push(` = ${backTicks(model.defaultValue)}`);
  }

  if (useCodeBlocks) {
    md.push(';');
  }

  const result = md.join('');
  return useCodeBlocks ? codeBlock(result) : `> ${result}`;
}

function getPrefix(
  context: MarkdownThemeContext,
  model: DeclarationReflection,
  useCodeBlocks: boolean,
) {
  const keyword = context.helpers.getKeyword(model.kind);
  return [
    context.helpers.getReflectionFlags(model.flags),
    model.flags?.isRest ? '...' : '',
    useCodeBlocks && keyword ? keyword : '',
  ]
    .filter((value) => value.length > 0)
    .join(' ');
}

function buildDeclarationName(
  context: MarkdownThemeContext,
  model: DeclarationReflection,
) {
  const nameParts: string[] = [];
  if (model.getSignature) {
    nameParts.push(`${backTicks('get')} `);
  }
  if (model.setSignature) {
    nameParts.push(`${backTicks('set')} `);
  }

  const originalName = (model as DeclarationWithOriginalName).originalName;
  let declarationName = originalName ?? model.name;
  if (model.flags.isOptional) {
    declarationName += '?';
  }

  const displayName = context.options.getValue('useHTMLEncodedBrackets')
    ? encodeAngleBrackets(declarationName)
    : declarationName;

  nameParts.push(
    /[\\`]/.test(declarationName)
      ? escapeChars(displayName)
      : bold(escapeChars(displayName)),
  );

  if (model.typeParameters?.length) {
    nameParts.push(
      `${context.helpers.getAngleBracket('<')}${model.typeParameters
        .map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}${context.helpers.getAngleBracket('>')}`,
    );
  }

  nameParts.push(model.kind === ReflectionKind.TypeAlias ? ' = ' : ': ');
  return nameParts.join('');
}
