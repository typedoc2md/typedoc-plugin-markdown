import * as path from 'path';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { bold, link } from '../../support/els';
import { getProjectDisplayName } from '../../support/helpers';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function pageHeader(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
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
  const projectName = getProjectDisplayName(
    page.project,
    context.getOption('includeVersion'),
  );

  const hasReadme = !context.getOption('readme').endsWith('none');

  const md = [
    `${link(
      bold(projectName),
      context.relativeURL(context.getOption('entryDocument')),
    )}`,
  ];

  if (hasReadme) {
    md.push(
      `(${link(
        bold(
          page.project.groups
            ? context.getOption('entryPoints').length > 1
              ? 'Modules'
              : 'Exports'
            : 'Packages',
        ),
        context.relativeURL(page.project.url),
      )})`,
    );
  }

  return `${md.join(' ')}\n***\n`;
}

export function packageHeader(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model);
  if (!packageItem) {
    return '';
  }

  const hasReadme = Boolean(packageItem.readme);

  const readmeUrl = `${path.dirname(packageItem.url)}/${context.getOption(
    'entryDocument',
  )}`;

  const md = [
    `${link(
      bold(packageItem.name),
      context.relativeURL(hasReadme ? readmeUrl : packageItem.url),
    )}`,
  ];

  if (hasReadme) {
    md.push(`(${link(bold('Modules'), context.relativeURL(packageItem.url))})`);
  }

  return `${md.join(' ')}\n***\n`;
}

function findPackage(model: DeclarationReflection | ProjectReflection) {
  if (model.kindOf(ReflectionKind.Module)) {
    return model;
  }
  if (model.parent) {
    return findPackage(model.parent as DeclarationReflection);
  }
  return null;
}
