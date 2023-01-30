import {
  DeclarationReflection,
  LiteralType,
  ParameterReflection,
  ReflectionKind,
} from 'typedoc';
import { backTicks } from '../support/els';
import { stripComments, stripLineBreaks } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMemberTitle(
  context: MarkdownThemeRenderContext,
  reflection: ParameterReflection | DeclarationReflection,
) {
  const md: string[] = [];

  if (
    reflection.flags?.length &&
    !reflection.flags.isOptional &&
    !reflection.flags.isRest
  ) {
    md.push(reflection.flags.map((flag) => flag.toLowerCase()).join(' ') + ' ');
  }

  if (reflection.flags.isRest) {
    md.push('... ');
  }

  md.push(reflection.name);

  if (reflection.flags.isOptional) {
    md.push('?');
  }

  if (
    reflection instanceof DeclarationReflection &&
    reflection.typeParameters
  ) {
    md.push(
      `\\<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }
  if (reflection.type) {
    md.push(
      `${
        reflection.parent?.kindOf(ReflectionKind.Enum) ? ' = ' : ': '
      }${context.partials.someType(reflection.type, 'all')}`,
    );
  }

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
