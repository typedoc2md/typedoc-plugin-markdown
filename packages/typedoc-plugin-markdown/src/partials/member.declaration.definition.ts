import { DeclarationReflection } from 'typedoc';
import { backTicks, bold } from '../support/els';
import { escapeChars, stripComments, stripLineBreaks } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function declarationMemberDefinition(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = ['> '];

  if (
    reflection.flags?.length &&
    !reflection.flags.isOptional &&
    !reflection.flags.isRest
  ) {
    md.push(reflection.flags.map((flag) => backTicks(flag)).join(' '));
  }

  if (reflection.flags.isRest) {
    md.push('...');
  }

  md.push(`${bold(escapeChars(reflection.name))}${reflection.type ? ':' : ''}`);

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

  if (reflection.defaultValue && reflection.defaultValue !== '...') {
    md.push(
      ` = \`${stripLineBreaks(stripComments(reflection.defaultValue))}\``,
    );
  }

  return md.join(' ');
}
