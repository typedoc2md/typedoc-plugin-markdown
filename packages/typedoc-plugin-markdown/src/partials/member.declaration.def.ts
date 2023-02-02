import { DeclarationReflection, LiteralType } from 'typedoc';
import { backTicks, bold } from '../support/els';
import { stripComments, stripLineBreaks } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMemberDef(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  if (
    reflection.flags?.length &&
    !reflection.flags.isOptional &&
    !reflection.flags.isRest
  ) {
    md.push(reflection.flags.map((flag) => bold(backTicks(flag))).join(' '));
  }

  if (reflection.flags.isRest) {
    md.push('...');
  }

  if (reflection.typeParameters) {
    md.push(
      `\\<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }
  if (reflection.type) {
    md.push(`${context.partials.someType(reflection.type, 'all')}`);
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

  return md.join(' ');
}
