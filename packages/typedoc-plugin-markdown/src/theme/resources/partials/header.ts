import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../../plugin/events';
import { bold, link } from '../../../support/elements';
import { getIndexLabel, getProjectDisplayName } from '../../helpers';

/**
 * @category Partials
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const isPackages =
    context.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages && !Boolean(page.project.groups);
  if (isPackages) {
    const packageItem = findPackage(page.model);
    if (packageItem) {
      return packageHeader(context, page);
    }
  }
  return projectHeader(context, page, isPackages);
}

function projectHeader(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
  isPackages = false,
) {
  const entryFileName = context.options.getValue('entryFileName');

  const md: string[] = [];

  const readmeLabel = 'Readme';
  const documentationLabel = getIndexLabel(page.project, isPackages);

  md.push(
    bold(
      getProjectName(
        page.project,
        context,
        context.options.getValue('titleLink'),
      ),
    ),
  );

  md.push('•');

  const preserveReadme =
    Boolean(page.project.readme) && !context.options.getValue('mergeReadme');

  const isSinglePage =
    page.project?.groups &&
    page.project?.groups.every((group) => !group.allChildrenHaveOwnDocument());

  const preserveModulesPage =
    (page.project?.groups &&
      Boolean(
        page.project?.groups[0]?.children.find(
          (child) => child.name === context.options.getValue('entryModule'),
        ),
      )) ||
    false;

  if (preserveReadme) {
    const links: string[] = [];

    links.push(
      link(
        readmeLabel,
        context.relativeURL(preserveModulesPage ? 'readme_.md' : entryFileName),
      ),
    );
    links.push('\\|');
    links.push(link(documentationLabel, context.relativeURL(page.project.url)));

    md.push(links.join(' '));
  } else {
    md.push(
      isSinglePage
        ? documentationLabel
        : link(
            documentationLabel,
            preserveModulesPage
              ? context.relativeURL(page.project.url)
              : context.relativeURL(entryFileName),
          ),
    );
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

  const readmeLabel = 'Readme';
  const documentationLabel = getIndexLabel(packageItem);

  const isSinglePage =
    packageItem?.groups &&
    packageItem?.groups.every((group) => !group.allChildrenHaveOwnDocument());

  const entryFileName = context.options.getValue('entryFileName');

  md.push(getProjectName(page.project, context, page.project.url));
  md.push('\\>');

  md.push(bold(packageItem.name));

  md.push('•');

  const preservePackageReadme =
    Boolean(packageItem.readme) && !context.options.getValue('mergeReadme');

  if (preservePackageReadme) {
    const links: string[] = [];
    const readmeUrl = `${packageItem.name}/${entryFileName}`;

    links.push(link(readmeLabel, context.relativeURL(readmeUrl)));
    links.push('\\|');

    links.push(link(documentationLabel, context.relativeURL(packageItem.url)));

    md.push(links.join(' '));
  } else {
    md.push(
      isSinglePage
        ? documentationLabel
        : link(documentationLabel, context.relativeURL(packageItem.url)),
    );
  }

  return `${md.join(' ')}\n\n***\n`;
}

function getProjectName(
  project: ProjectReflection,
  context: MarkdownThemeRenderContext,
  url?: string,
) {
  const projectName = getProjectDisplayName(
    project,
    context.options.getValue('includeVersion'),
  );
  if (url) {
    return link(projectName, context.relativeURL(url));
  } else {
    return projectName;
  }
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
