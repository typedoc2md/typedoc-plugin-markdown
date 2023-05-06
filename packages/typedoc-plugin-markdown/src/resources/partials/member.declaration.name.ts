import { DeclarationReflection } from 'typedoc';
import { bold } from '../../support/els';
import { escapeChars } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function declarationMemberName(
  context: MarkdownThemeRenderContext,
  declaration: DeclarationReflection,
  emphasis = true,
) {
  if (Boolean(declaration.getSignature || Boolean(declaration.setSignature))) {
    if (declaration.getSignature) {
      return `${'get'} ${getName(
        `${declaration.getSignature.name}()`,
        emphasis,
      )}`;
    } else if (declaration.setSignature) {
      return `${'set'} ${getName(
        declaration.setSignature.name,
        emphasis,
      )}(${declaration.setSignature.parameters?.map((parameter) => {
        return parameter.type
          ? `${parameter.name}: ${context.partials.someType(
              parameter.type,
              'all',
            )}`
          : '';
      })})`;
    }
  }
  return getName(declaration.name, emphasis);
}

function getName(name: string, emphasis: boolean) {
  if (emphasis) {
    return bold(escapeChars(name));
  }
  return escapeChars(name);
}
