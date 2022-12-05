import { TypeParameterReflection } from 'typedoc';
import { backTicks } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function typeParameters(
  context: MarkdownThemeRenderContext,
  typeParameters: TypeParameterReflection[],
) {
  const md: string[] = [];
  typeParameters?.forEach((item) => {
    if (item.varianceModifier) {
      md.push(item.varianceModifier);
    }
    md.push(`- ${backTicks(item.name)}`);
    if (!!item.type) {
      md.push(` *extends* ${context.partials.someType(item.type)}`);
    }
    if (!!item.default) {
      md.push(` = ${context.partials.someType(item.default)}`);
    }
    if (item.comment) {
      md.push(context.partials.comment(item.comment));
    }
    md.push('\n');
  });
  return md.join('');
}
