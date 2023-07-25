import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { bold, link } from '../../../support/elements';
import { getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const isMonoRepo = !Boolean(page.project.groups);
  if (isMonoRepo) {
    const packageItem = findPackage(page.model);
    if (packageItem) {
      return packageHeader(context, page);
    }
  }
  return projectHeader(context, page);
}

function projectHeader(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const entryFileName = context.options.getValue('entryFileName');

  const projectName = getProjectDisplayName(
    page.project,
    context.options.getValue('includeVersion'),
  );

  const md: string[] = [];

  md.push(link(bold(projectName), context.relativeURL(entryFileName)));

  return `${md.join(' ')}\n***\n`;
}

function packageHeader(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model) as any;
  if (!packageItem) {
    return '';
  }

  const md: string[] = [];

  md.push(link(bold(packageItem.name), context.relativeURL(packageItem.url)));

  return `${md.join(' ')}\n***\n`;
}

function findPackage(model: DeclarationReflection | ProjectReflection) {
  if (
    model.kindOf(ReflectionKind.Module) &&
    model.parent?.kindOf(ReflectionKind.Project)
  ) {
    return model;
  }
  if (model.parent) {
    return findPackage(model.parent as DeclarationReflection);
  }
  return null;
}
