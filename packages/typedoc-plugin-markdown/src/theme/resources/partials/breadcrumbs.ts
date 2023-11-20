import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { link } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';

/**
 * Renders the breadcrumbs
 * @mergeTarget
 */
export function breadcrumbs(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const md: string[] = [];

  const breadcrumb = (model: Reflection) => {
    const isModule = model.kindOf(ReflectionKind.Module);
    const isPackage = isModule && model.parent?.kindOf(ReflectionKind.Module);

    if (model?.parent?.parent && !isPackage && !isModule) {
      breadcrumb(model.parent);
    }
    md.push(link(escapeChars(model.name), context.relativeURL(model?.url)));
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

  return md.length > 1 ? `${md.join('.')}` : '';
}
