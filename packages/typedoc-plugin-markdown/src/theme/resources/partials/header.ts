import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { bold, link } from '../../../support/elements';
import { getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
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
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const entryFileName = context.options.getValue('entryFileName');
  const indexFileName = context.options.getValue('indexFileName') as string;
  const titleLink = context.options.getValue('titleLink');
  const hasBreadcrumbs = !context.options.getValue('hideBreadcrumbs');
  const hasReadme = !context.options.getValue('readme')?.endsWith('none');

  const projectName = getProjectDisplayName(
    page.project,
    context.options.getValue('includeVersion'),
  );

  const md: string[] = [];

  if (Boolean(titleLink)) {
    md.push(link(bold(projectName), titleLink));
  } else {
    md.push(bold(projectName));
  }

  if (hasReadme) {
    md.push(link('README', entryFileName));
  }
  if (hasReadme || !hasBreadcrumbs) {
    md.push(
      link(
        'API',
        hasReadme
          ? context.relativeURL(indexFileName)
          : context.relativeURL(entryFileName),
      ),
    );
  }

  return `${md.join(' ∙ ')}\n\n***\n`;
}

function packageHeader(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model) as any;

  if (!packageItem) {
    return '';
  }

  const md: string[] = [];

  const entryFileName = context.options.getValue('entryFileName');
  const hasReadme = packageItem.readme;
  const hasBreadcrumbs = !context.options.getValue('hideBreadcrumbs');

  md.push(bold(packageItem.name));

  if (hasReadme) {
    md.push(link('README', entryFileName));
  }

  if (hasReadme || !hasBreadcrumbs) {
    md.push(
      link(
        'API',
        hasReadme
          ? context.relativeURL(packageItem.url)
          : context.relativeURL(packageItem.url),
      ),
    );
  }

  return `${md.join(' ∙ ')}\n\n***\n`;
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
