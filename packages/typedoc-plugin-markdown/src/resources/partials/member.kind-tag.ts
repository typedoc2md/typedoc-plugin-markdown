import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { SYMBOLS_WITH_DOCUMENTS } from '../../support/constants';
import { backTicks, bold } from '../../support/els';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function memberKindTag(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  if (reflection.kindOf(SYMBOLS_WITH_DOCUMENTS)) {
    return bold(backTicks(ReflectionKind.singularString(reflection.kind)));
  }
  return '';
}
