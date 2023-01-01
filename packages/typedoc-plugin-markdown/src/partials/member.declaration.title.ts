import {
  DeclarationReflection,
  LiteralType,
  ParameterReflection,
  ReflectionKind,
  ReflectionType,
} from 'typedoc';
import { backTicks } from '../support/els';
import { escapeChars, stripComments, stripLineBreaks } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMemberTitle(
  context: MarkdownThemeRenderContext,
  reflection: ParameterReflection | DeclarationReflection,
) {
  const md: string[] = ['> '];

  if (
    reflection.flags &&
    reflection.flags.length > 0 &&
    !reflection.flags.isRest
  ) {
    md.push(reflection.flags.map((flag) => `\`${flag}\``).join(' '));
  }
  md.push(
    `${reflection.flags.isRest ? '... ' : ''} **${escapeChars(
      reflection.name,
    )}**`,
  );
  if (
    reflection instanceof DeclarationReflection &&
    reflection.typeParameters
  ) {
    md.push(
      `<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  md.push(getType(context, reflection));

  if (
    !(reflection.type instanceof LiteralType) &&
    reflection.defaultValue &&
    reflection.defaultValue !== '...'
  ) {
    md.push(
      ` = \`${stripLineBreaks(stripComments(reflection.defaultValue))}\``,
    );
  }

  return md.join('');
}

function getType(
  context: MarkdownThemeRenderContext,
  reflection: ParameterReflection | DeclarationReflection,
) {
  const reflectionType = reflection.type as ReflectionType;
  if (reflectionType && reflectionType.declaration?.children) {
    return ': `Object`';
  }
  return (
    (reflection.parent?.kindOf(ReflectionKind.Enum) ? ' = ' : ': ') +
    context.partials.someType(reflectionType)
  );
}
