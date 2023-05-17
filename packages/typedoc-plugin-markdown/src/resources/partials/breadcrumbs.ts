import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { link } from '../../support/els';
import { escapeChars } from '../../support/utils';

export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const md: string[] = [];

  if (
    page.url === page.project.url ||
    page.url === context.options.getValue('entryFileName')
  ) {
    return '';
  }

  md.push(link(page.project.name, context.relativeURL(page.project.url)));

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }
    md.push(link(model.name, context.relativeURL(model?.url)));
  };

  const pageName = escapeChars(page.model.name);

  if (
    page.model?.parent?.parent &&
    (page.url !== page.project.url ||
      page.url !== context.options.getValue('entryFileName'))
  ) {
    breadcrumb(page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' > ')}` : '';
}
