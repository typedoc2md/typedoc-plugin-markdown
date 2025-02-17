import { bold, link } from '@plugin/libs/markdown/index.js';
import { removeFirstScopedDirectory } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  ReflectionKind,
} from 'typedoc';

export function header(this: MarkdownThemeContext): string {
  const textContentMappings = this.options.getValue('textContentMappings');

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

    const md: string[] = [];

    const title = this.helpers.getProjectName(
      textContentMappings['header.title'],
      this.page,
    );

    if (this.page.url === entryFileName) {
      md.push(bold(title));
    } else {
      md.push(link(bold(title), this.relativeURL(entryFileName)));
    }

    return `${md.join(' • ')}\n\n***\n`;
  };

  const getPackageHeader = () => {
    const packageItem = findPackage(
      this.page.model as ProjectReflection,
    ) as ProjectReflection;

    if (!packageItem) {
      return '';
    }

    const md: string[] = [];

    const ignoreScopes = this.options.getValue('excludeScopesInPaths');
    const fileExtension = this.options.getValue('fileExtension');
    const entryFileName = `${path.parse(this.options.getValue('entryFileName')).name}${fileExtension}`;

    const packageItemName = packageItem.packageVersion
      ? `${packageItem.name} v${packageItem.packageVersion}`
      : packageItem.name;

    const packagesMeta = this.getPackageMetaData(packageItem.name);
    const entryModule = packagesMeta?.options?.getValue('entryModule');
    const packageEntryFile = ignoreScopes
      ? removeFirstScopedDirectory(
          `${packageItem.name}${path.sep}${entryFileName}`,
        )
      : `${packageItem.name}${path.sep}${entryFileName}`;

    if (this.page.url === packageEntryFile || Boolean(entryModule)) {
      md.push(bold(packageItemName));
    } else {
      md.push(link(bold(packageItemName), this.relativeURL(packageEntryFile)));
    }

    return `${md.join(' • ')}\n\n***\n`;
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
