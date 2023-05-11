import { DeclarationReflection, PageEvent, ProjectReflection } from 'typedoc';
import { link } from '../../support/els';
import { escapeChars } from '../../support/utils';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const md: string[] = [];

  if (page.url === page.project.url || page.url === context.indexFile) {
    return '';
  }

  md.push(
    link(
      Boolean(page.project.groups) ? 'Index' : 'Packages',
      context.relativeURL(page.project.url),
    ),
  );

  const breadcrumb = (model: any) => {
    if (model?.parent?.parent) {
      breadcrumb(model.parent);
    }
    md.push(link(model.name, context.relativeURL(model?.url)));
  };

  const pageName = escapeChars(page.model.name);

  if (
    page.model?.parent?.parent &&
    (page.url !== page.project.url || page.url !== context.indexFile)
  ) {
    breadcrumb(page.model.parent);
  }

  md.push(pageName);

  return md.length > 1 ? `${md.join(' > ')}` : '';
}
