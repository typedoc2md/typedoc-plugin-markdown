import { DeclarationReflection, PageEvent, ReflectionKind } from 'typedoc';
import { backTicks, heading } from '../support/els';
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
    const prefix =
      page.model.kindString && !page.model.kindOf(ReflectionKind.SomeModule)
        ? `${backTicks(page.model.kindString)} `
        : '';

    md.push(heading(1, context.partials.reflectionTitle(page.model)));
  }

  return md.join('\n\n');
}
