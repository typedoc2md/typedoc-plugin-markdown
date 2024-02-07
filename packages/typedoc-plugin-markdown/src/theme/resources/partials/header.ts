import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { MarkdownPageEvent } from '../../..';
import { bold, link } from '../markdown';

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
  const fileExtension = context.options.getValue('useMDXFileExt')
    ? '.mdx'
    : '.md';
  const entryFileName = `${path.parse(context.options.getValue('entryFileName')).name}${fileExtension}`;
  const titleLink = context.options.getValue('titleLink');

  const md: string[] = [];

  const title = context.helpers.getIndexTitle(
    context.text.getText('header.title'),
    page.project.name,
    page.project.packageVersion,
  );

  const readmeLabel = context.text.getText('header.readme');
  const indexLabel = context.text.getText('header.docs');

  md.push(titleLink ? bold(link(title, titleLink)) : bold(title));

  md.push('•');

  const preserveReadme =
    Boolean(page.project.readme) && !context.options.getValue('mergeReadme');

  const useEntryModule =
    (page.project?.groups &&
      Boolean(
        page.project?.groups[0]?.children.find(
          (child) => child.name === context.options.getValue('entryModule'),
        ),
      )) ||
    false;

  if (preserveReadme) {
    const links: string[] = [];
    const readMeUrl = useEntryModule
      ? `readme_${fileExtension}`
      : entryFileName;

    if (page.url === readMeUrl) {
      links.push(readmeLabel);
    } else {
      links.push(context.partials.linkTo(readmeLabel, readMeUrl));
    }

    links.push('\\|');

    const indexUrl = useEntryModule ? entryFileName : page.project.url;

    if (page.url === indexUrl) {
      links.push(indexLabel);
    } else {
      links.push(context.partials.linkTo(indexLabel, indexUrl));
    }

    md.push(`${links.join(' ')}`);
  } else {
    if (useEntryModule || page.url === page.project.url) {
      md.push(indexLabel);
    } else {
      md.push(context.partials.linkTo(indexLabel, page.project.url));
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

  const readmeLabel = context.text.getText('header.readme');
  const indexLabel = context.text.getText('header.docs');

  const fileExtension = context.options.getValue('useMDXFileExt')
    ? '.mdx'
    : '.md';
  const entryFileName = `${path.parse(context.options.getValue('entryFileName')).name}${fileExtension}`;

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
