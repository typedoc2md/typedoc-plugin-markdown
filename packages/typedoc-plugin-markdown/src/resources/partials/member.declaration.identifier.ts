import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { backTicks } from '../../support/els';
import { getDeclarationType } from '../../support/helpers';
import { stripComments, stripLineBreaks } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function declarationMemberIdentifier(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  const md: string[] = [];

  const declarationType = getDeclarationType(reflection);

  if (
    reflection.flags?.length &&
    !reflection.flags.isRest &&
    !reflection.flags.isOptional
  ) {
    md.push(
      reflection.flags.map((flag) => backTicks(flag.toLowerCase())).join(' '),
    );
  }

  if (reflection.kindOf(ReflectionKind.Variable) && !reflection.flags.isConst) {
    md.push(backTicks('let'));
  }

  if (reflection.flags.isRest) {
    md.push('...');
  }

  const name: string[] = [context.partials.declarationMemberName(reflection)];

  if (reflection.flags.isOptional) {
    name.push('?');
  }

  if (declarationType) {
    name.push(':');
  }

  md.push(name.join(''));

  if (reflection.typeParameters) {
    md.push(
      `\\<${reflection.typeParameters
        ?.map((typeParameter) => backTicks(typeParameter.name))
        .join(', ')}\\>`,
    );
  }

  if (declarationType) {
    md.push(`${context.partials.someType(declarationType, 'all')}`);
  }

  if (reflection.defaultValue && reflection.defaultValue !== '...') {
    md.push(
      ` = \`${stripLineBreaks(stripComments(reflection.defaultValue))}\``,
    );
  }

  return md.join(' ');
}
