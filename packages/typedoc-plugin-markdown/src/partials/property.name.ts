import { DeclarationReflection } from 'typedoc';
import { backTicks, bold } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function propertyName(
  context: MarkdownThemeRenderContext,
  property: DeclarationReflection,
) {
  const md: string[] = [];
  if (property.flags.isRest) {
    md.push('...');
  }
  if (property.getSignature) {
    md.push(`${bold('get')} ${backTicks(property.getSignature.name)}()`);
  } else if (property.setSignature) {
    md.push(
      `${bold('set')} ${backTicks(
        property.setSignature.name,
      )}(${property.setSignature.parameters?.map((parameter) => {
        return parameter.type
          ? `${backTicks(parameter.name)}: ${context.partials.someType(
              parameter.type,
              'all',
            )}`
          : '';
      })})`,
    );
  } else {
    md.push(backTicks(property.name));
  }
  if (property.flags.isOptional) {
    md.push('?');
  }
  return md.join('');
}
