import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { link } from '../support/els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  if (page.model) {
    if (page.model.kind && page.model.kind !== ReflectionKind.Module) {
      const md: string[] = [];
      md.push(
        page.url === context.globalsFile
          ? page.project.name
          : link(
              page.project.name,
              context.relativeURL(
                context.getOption('readme').endsWith('none')
                  ? context.getOption('entryDocument')
                  : context.globalsFile,
              ),
            ),
      );
      if (page.model.parent && page.model.parent.parent) {
        if (page?.model?.parent?.parent.parent) {
          md.push(
            `[${page.model.parent.parent.name}](${context.relativeURL(
              page.model?.parent?.parent.url,
            )})`,
          );
        }
        md.push(
          `[${page.model.parent.name}](${context.relativeURL(
            page.model.parent.url,
          )})`,
        );
      }
      md.push(page.model.name);
      return md.length > 1 ? `${md.join(' / ')}` : '';
    }
  }
  return '';
}
