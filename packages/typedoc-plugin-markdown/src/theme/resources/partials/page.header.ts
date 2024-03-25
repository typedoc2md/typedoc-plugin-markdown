import { bold, link } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

/**
 * @category Page Partials
 */
export function header(context: MarkdownThemeRenderContext): string {
  const getHeader = () => {
    const isPackages =
      context.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;
    if (isPackages) {
      const packageItem = findPackage(context.page.model as ProjectReflection);
      if (packageItem) {
        return getPackageHeader();
      }
    }
    return getProjectHeader();
  };

  const getProjectHeader = () => {
    const fileExtension = context.options.getValue('fileExtension');
    const entryFileName = `${path.parse(context.options.getValue('entryFileName')).name}${fileExtension}`;
    const titleLink = context.options.getValue('titleLink');

    const md: string[] = [];

    const title = context.helpers.getProjectName(
      context.helpers.getText('header.title'),
    );

    const readmeLabel = context.helpers.getText('header.readme');
    const indexLabel = context.helpers.getText('header.docs');

    md.push(titleLink ? bold(link(title, titleLink)) : bold(title));

    md.push('•');

    const preserveReadme =
      Boolean(context.page.project.readme) &&
      !context.options.getValue('mergeReadme');

    const useEntryModule =
      (context.page.project?.groups &&
        Boolean(
          context.page.project?.groups[0]?.children.find(
            (child) => child.name === context.options.getValue('entryModule'),
          ),
        )) ||
      false;

    if (preserveReadme) {
      const links: string[] = [];
      const readMeUrl = useEntryModule
        ? `readme_${fileExtension}`
        : entryFileName;

      if (context.page.url === readMeUrl) {
        links.push(readmeLabel);
      } else {
        links.push(
          link(readmeLabel, context.helpers.getRelativeUrl(readMeUrl)),
        );
      }

      links.push('\\|');

      const indexUrl = useEntryModule
        ? entryFileName
        : context.page.project.url;

      if (context.page.url === indexUrl) {
        links.push(indexLabel);
      } else {
        if (indexUrl) {
          links.push(
            link(indexLabel, context.helpers.getRelativeUrl(indexUrl)),
          );
        }
      }

      md.push(`${links.join(' ')}`);
    } else {
      if (useEntryModule || context.page.url === context.page.project.url) {
        md.push(indexLabel);
      } else {
        if (context.page.project.url) {
          md.push(
            link(
              indexLabel,
              context.helpers.getRelativeUrl(context.page.project.url),
            ),
          );
        }
      }
    }

    return `${md.join(' ')}\n\n***\n`;
  };

  const getPackageHeader = () => {
    const packageItem = findPackage(
      context.page.model as ProjectReflection,
    ) as ProjectReflection;

    if (!packageItem) {
      return '';
    }

    const md: string[] = [];

    const readmeLabel = context.helpers.getText('header.readme');
    const indexLabel = context.helpers.getText('header.docs');

    const fileExtension = context.options.getValue('fileExtension');
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

      if (context.page.url === readmeUrl) {
        links.push(readmeLabel);
      } else {
        links.push(
          link(readmeLabel, context.helpers.getRelativeUrl(readmeUrl)),
        );
      }

      links.push('\\|');

      if (context.page.url === packageItem.url) {
        links.push(indexLabel);
      } else {
        if (packageItem.url) {
          links.push(
            link(indexLabel, context.helpers.getRelativeUrl(packageItem.url)),
          );
        }
      }
      md.push(`${links.join(' ')}`);
    } else {
      md.push(indexLabel);
    }

    return `${md.join(' ')}\n\n***\n`;
  };

  function findPackage(model: DeclarationReflection | ProjectReflection) {
    if (
      model.kind === ReflectionKind.Module &&
      model.parent?.kind === ReflectionKind.Project
    ) {
      return model;
    }
    if (model.parent) {
      return findPackage(model.parent as DeclarationReflection);
    }
    return null;
  }

  return getHeader();
}
