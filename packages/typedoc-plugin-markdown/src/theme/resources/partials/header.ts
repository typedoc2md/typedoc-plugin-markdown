import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { bold, link } from '../../../support/elements';
import { getProjectDisplayName, hasReadme } from '../../helpers';

/**
 * @category Partials
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const isPackages = !Boolean(page.project.groups);
  if (isPackages) {
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

  const titleLink = context.options.getValue('titleLink');

  const projectName = getProjectDisplayName(
    page.project,
    context.options.getValue('includeVersion'),
  );

  const md: string[] = [];

  if (Boolean(titleLink)) {
    md.push(link(projectName, titleLink));
  } else {
    md.push(projectName);
  }

  md.push('•');

  if (hasReadme(page.project)) {
    const links: string[] = [];
    const preserveModulesPage =
      (page.project?.groups &&
        Boolean(
          page.project?.groups[0]?.children.find(
            (child) => child.name === context.options.getValue('entryModule'),
          ),
        )) ||
      false;

    links.push(
      link(
        'Readme',
        context.relativeURL(preserveModulesPage ? 'readme_.md' : entryFileName),
      ),
    );
    links.push('\\|');

    links.push(link('Documentation', context.relativeURL(page.project.url)));

    md.push(links.join(' '));
  } else {
    md.push(link('Documentation', context.relativeURL(page.project.url)));
  }

  return `${md.join(' ')}\n\n***\n`;
}

function packageHeader(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model) as ProjectReflection;

  if (!packageItem) {
    return '';
  }

  const md: string[] = [];

  const entryFileName = context.options.getValue('entryFileName');

  md.push(bold(packageItem.name));

  if (hasReadme(packageItem)) {
    const links: string[] = [];
    const readmeUrl = `${packageItem.name}/${entryFileName}`;
    links.push('•');

    links.push(link('Readme', context.relativeURL(readmeUrl)));
    links.push('\\|');

    links.push(link('Documentation', context.relativeURL(packageItem.url)));

    md.push(links.join(' '));
  }

  return `${md.join(' ')}\n\n***\n`;
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
