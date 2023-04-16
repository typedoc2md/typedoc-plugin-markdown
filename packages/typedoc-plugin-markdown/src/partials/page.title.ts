import { DeclarationReflection, PageEvent, ReflectionKind } from 'typedoc';
import { heading } from '../support/els';
import { getReflectionTitle } from '../support/helpers';
import { MarkdownThemeRenderContext } from '../theme-context';

export function pageTitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];
  const title = [getReflectionTitle(page.model, true)];
  if (!page.model.kindOf(ReflectionKind.Module)) {
    title.unshift(ReflectionKind.singularString(page.model.kind));
  }
  md.push(heading(1, title.join(': ')));
  return md.join('\n\n');
}
