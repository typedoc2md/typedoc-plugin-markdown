import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';

/**
 * Docs for header!!!
 */
export function header(
  context: MarkdownThemeRenderContext,
  page: MarkdownPageEvent<ProjectReflection | DeclarationReflection>,
): string {
  const isPackages =
    context.options.getValue('entryPointStrategy') ===
    EntryPointStrategy.Packages;
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

  const md: string[] = [];

  const { bold, link } = context.markdown;

  const title = context.text.indexTitle(
    context.text.get('header.title'),
    page.project.name,
    page.project.packageVersion,
  );

  const readmeLabel = context.text.get('header.readme');
  const indexLabel = context.text.get('header.docs');

  md.push(titleLink ? bold(link(title, titleLink)) : bold(title));

  md.push('•');

  const preserveReadme =
    Boolean(page.project.readme) && !context.options.getValue('mergeReadme');

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

    if (page.url === entryFileName) {
      links.push(readmeLabel);
    } else {
      links.push(
        context.partials.linkTo(
          readmeLabel,
          preserveModulesPage ? 'readme_.md' : entryFileName,
        ),
      );
    }

    links.push('\\|');

    if (page.url === page.project.url) {
      links.push(indexLabel);
    } else {
      links.push(context.partials.linkTo(indexLabel, page.project.url));
    }

    md.push(`${links.join(' ')}`);
  } else {
    md.push(`${indexLabel}`);
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
  const { bold } = context.markdown;

  const readmeLabel = context.text.get('header.readme');
  const indexLabel = context.text.get('header.docs');

  const entryFileName = context.options.getValue('entryFileName');

  const packageItemName = packageItem.packageVersion
    ? `${packageItem.name} v${packageItem.packageVersion}`
    : packageItem.name;

  md.push(bold(packageItemName));

  md.push('•');

  const preservePackageReadme =
    Boolean(packageItem.readme) && !context.options.getValue('mergeReadme');

  if (preservePackageReadme) {
    const links: string[] = [];
    const readmeUrl = `${packageItem.name}/${entryFileName}`;

    if (page.url === readmeUrl) {
      links.push(readmeLabel);
    } else {
      links.push(context.partials.linkTo(readmeLabel, readmeUrl));
    }

    links.push('\\|');

    if (page.url === packageItem.url) {
      links.push(indexLabel);
    } else {
      links.push(context.partials.linkTo(indexLabel, packageItem.url));
    }
    md.push(`${links.join(' ')}`);
  } else {
    md.push(indexLabel);
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
