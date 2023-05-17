import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { SYMBOLS_WITH_DOCUMENTS } from '../../support/constants';
import { backTicks, bold } from '../../support/els';

export function memberKindTag(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
): string {
  if (reflection.kindOf(SYMBOLS_WITH_DOCUMENTS)) {
    return bold(backTicks(ReflectionKind.singularString(reflection.kind)));
  }
  return '';
}
