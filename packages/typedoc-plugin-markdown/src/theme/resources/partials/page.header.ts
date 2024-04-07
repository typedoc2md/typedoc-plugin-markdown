import { bold, link } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from '@plugin/theme';
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
export function header(this: MarkdownThemeContext): string {
  const getHeader = () => {
    const isPackages =
      this.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;
    if (isPackages) {
      const packageItem = findPackage(this.page.model as ProjectReflection);
      if (packageItem) {
        return getPackageHeader();
      }
    }
    return getProjectHeader();
  };

  const getProjectHeader = () => {
    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;
    const titleLink = this.options.getValue('titleLink');

    const md: string[] = [];
    const name = this.page.project.name;
    const version = this.page.project.packageVersion;

    const title = this.getText('header.title')
      .replace('{projectName}', name)
      .replace('{version}', version ? `v${version}` : '')
      .replace(/\s+/g, ' ')
      .trim();

    const readmeLabel = this.getText('header.readme');
    const indexLabel = this.getText('header.docs');

    md.push(titleLink ? bold(link(title, titleLink)) : bold(title));

    md.push('•');

    const preserveReadme =
      Boolean(this.page.project.readme) &&
      !this.options.getValue('mergeReadme');

    const useEntryModule =
      (this.page.project?.groups &&
        Boolean(
          this.page.project?.groups[0]?.children.find(
            (child) => child.name === this.options.getValue('entryModule'),
          ),
        )) ||
      false;

    if (preserveReadme) {
      const links: string[] = [];
      const readMeUrl = useEntryModule
        ? `readme_${fileExtension}`
        : entryFileName;

      if (this.page.url === readMeUrl) {
        links.push(readmeLabel);
      } else {
        links.push(link(readmeLabel, this.getRelativeUrl(readMeUrl)));
      }

      links.push('\\|');

      const indexUrl = useEntryModule ? entryFileName : this.page.project.url;

      if (this.page.url === indexUrl) {
        links.push(indexLabel);
      } else {
        if (indexUrl) {
          links.push(link(indexLabel, this.getRelativeUrl(indexUrl)));
        }
      }

      md.push(`${links.join(' ')}`);
    } else {
      if (useEntryModule || this.page.url === this.page.project.url) {
        md.push(indexLabel);
      } else {
        if (this.page.project.url) {
          md.push(link(indexLabel, this.getRelativeUrl(this.page.project.url)));
        }
      }
    }

    return `${md.join(' ')}\n\n***\n`;
  };

  const getPackageHeader = () => {
    const packageItem = findPackage(
      this.page.model as ProjectReflection,
    ) as ProjectReflection;

    if (!packageItem) {
      return '';
    }

    const md: string[] = [];

    const readmeLabel = this.getText('header.readme');
    const indexLabel = this.getText('header.docs');

    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

    const packageItemName = packageItem.packageVersion
      ? `${packageItem.name} v${packageItem.packageVersion}`
      : packageItem.name;

    md.push(bold(packageItemName));

    md.push('•');

    const preservePackageReadme =
      Boolean(packageItem.readme) && !this.options.getValue('mergeReadme');

    if (preservePackageReadme) {
      const links: string[] = [];
      const readmeUrl = `${packageItem.name}/${entryFileName}`;

      if (this.page.url === readmeUrl) {
        links.push(readmeLabel);
      } else {
        links.push(link(readmeLabel, this.getRelativeUrl(readmeUrl)));
      }

      links.push('\\|');

      if (this.page.url === packageItem.url) {
        links.push(indexLabel);
      } else {
        if (packageItem.url) {
          links.push(link(indexLabel, this.getRelativeUrl(packageItem.url)));
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
