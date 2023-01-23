import { DeclarationReflection, PageEvent, ReflectionKind } from 'typedoc';
import { heading } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function pagetitle(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  const prefix =
    page.model.kindString && !page.model.kindOf(ReflectionKind.SomeModule)
      ? `${page.model.kindString}: `
      : '';
  md.push(heading(1, prefix + context.partials.reflectionTitle(page.model)));

  return md.join('\n\n');
}
