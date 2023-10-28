import {
  DeclarationReflection,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { bold, link } from '../../../support/elements';
import {
  getIndexFileName,
  getProjectDisplayName,
  hasReadme,
} from '../../helpers';

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
  const indexFileName = getIndexFileName(page.project);
  const titleLink = context.options.getValue('titleLink');

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

  if (hasReadme(page.project)) {
    if (!context.options.getValue('mergeReadme')) {
      const links: string[] = [];
      links.push('(');
      if (page.url === entryFileName) {
        links.push('Readme');
        links.push('\\|');
      } else {
        links.push(link('Readme', context.relativeURL(entryFileName)));
        links.push('\\|');
      }
      if (page.url !== entryFileName) {
        links.push('API');
      } else {
        links.push(link('API', context.relativeURL(indexFileName)));
      }
      links.push(')');
      md.push(links.join(' '));
    }
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
    if (!context.options.getValue('mergeReadme')) {
      const links: string[] = [];
      const readmeUrl = `${packageItem.name}/${entryFileName}`;
      links.push('(');
      if (page.url === readmeUrl) {
        links.push('Readme');
        links.push('\\|');
      } else {
        links.push(link('Readme', context.relativeURL(readmeUrl)));
        links.push('\\|');
      }
      if (page.url !== readmeUrl) {
        links.push('API');
      } else {
        links.push(link('API', context.relativeURL(packageItem.url)));
      }
      links.push(')');
      md.push(links.join(' '));
    }
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
