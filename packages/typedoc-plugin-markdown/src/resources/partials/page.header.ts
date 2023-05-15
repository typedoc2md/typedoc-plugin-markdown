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

  const md: string[] = [];

  md.push(
    link(
      bold(projectName),
      context.relativeURL(context.getOption('entryFileName')),
    ),
  );

  const links: string[] = [];

  if (!context.options.readme?.endsWith('none')) {
    if (page.url === context.options.entryFileName) {
      links.push('Readme');
    } else {
      links.push(
        link('Readme', context.relativeURL(context.getOption('entryFileName'))),
      );
    }
  }

  if (hasReadme && page.project.url !== context.options.entryFileName) {
    if (page.url === page.project.url) {
      links.push('Index');
    } else {
      links.push(link('Index', context.relativeURL(page.project.url)));
    }
  }
  if (links.length > 1) {
    md.push(`( ${links.join(' \\| ')} )`);
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
    'entryFileName',
  )}`;

  const md: string[] = [];

  md.push(link(bold(packageItem.name), context.relativeURL(packageItem.url)));

  const links: string[] = [];

  if (hasReadme) {
    if (page.url === readmeUrl) {
      links.push('Readme');
    } else {
      links.push(
        `${link(
          'Readme',
          context.relativeURL(hasReadme ? readmeUrl : packageItem.url),
        )}`,
      );
    }

    if (page.url === packageItem.url) {
      links.push('Index');
    } else {
      links.push(`${link('Index', context.relativeURL(packageItem.url))}`);
    }
  }

  if (links.length) {
    md.push(`( ${links.join(' \\| ')} )`);
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
