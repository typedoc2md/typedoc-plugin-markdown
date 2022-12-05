import { DeclarationReflection, PageEvent, ReflectionKind } from 'typedoc';
import { heading } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function header(
  context: MarkdownThemeRenderContext,
  page: PageEvent<DeclarationReflection>,
) {
  const md: string[] = [];

  if (!context.getOption('hideBreadcrumbs')) {
    md.push(context.partials.breadcrumbs(page));
  }

  if (!context.getOption('hidePageTitle')) {
    const prefix = !page.model.kindOf(ReflectionKind.SomeModule)
      ? `${page.model.kindString}: `
      : '';
    md.push(
      heading(1, prefix + context.partials.reflectionTitle(page.model, true)),
    );
  }
  return md.join('\n\n');
}
