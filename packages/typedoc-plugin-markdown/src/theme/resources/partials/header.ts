import * as path from 'path';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { bold, link } from '../../../support/elements';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';
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
  const entryFileName = context.options.getValue('entryFileName') as string;

  const projectName = getProjectDisplayName(
    page.project,
    context.options.getValue('includeVersion'),
  );

  const hasReadme = !context.options.getValue('readme').endsWith('none');

  const md: string[] = [];

  md.push(link(bold(projectName), context.relativeURL(entryFileName)));

  const links: string[] = [];

  if (!context.options.getValue('readme')?.endsWith('none')) {
    if (page.url === entryFileName) {
      links.push('Readme');
    } else {
      links.push(link('Readme', context.relativeURL(entryFileName)));
    }
  }

  if (hasReadme && page.project.url !== entryFileName) {
    if (page.url === page.project.url) {
      links.push('API');
    } else {
      links.push(link('API', context.relativeURL(page.project.url)));
    }
  }
  if (links.length > 1) {
    md.push(`( ${links.join(' \\| ')} )`);
  }

  return `${md.join(' ')}\n***\n`;
}

function packageHeader(
  context: MarkdownThemeRenderContext,
  page: PageEvent<ProjectReflection | DeclarationReflection>,
) {
  const packageItem = findPackage(page.model);
  if (!packageItem) {
    return '';
  }

  const hasReadme = Boolean(packageItem.readme);

  const readmeUrl = `${path.dirname(
    packageItem.url,
  )}/${context.options.getValue('entryFileName')}`;

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
      links.push('API');
    } else {
      links.push(`${link('API', context.relativeURL(packageItem.url))}`);
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
