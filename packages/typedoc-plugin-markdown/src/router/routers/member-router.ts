import {
  removeFirstScopedDirectory,
  replaceFilename,
} from '@plugin/libs/utils/index.js';
import { MarkdownRenderer } from '@plugin/types/markdown-renderer.js';
import * as path from 'path';
import {
  DeclarationReflection,
  PageDefinition,
  PageKind,
  Reflection,
  ReflectionKind,
  Slugger,
} from 'typedoc';
import { MarkdownRouter } from '../markdown-router.js';

export class KindStructureRouter extends MarkdownRouter {
  protected buildChildPages(
    reflection: Reflection,
    outPages: PageDefinition[],
  ): void {
    const kind = this.getPageKind(reflection);

    if (kind) {
      const shouldWritePage = this.shouldWritePage(reflection);
      const idealName = this.getIdealBaseName(reflection);
      const actualName = this.getMarkdownFileName(idealName, !shouldWritePage);

      this.fullUrls.set(reflection, actualName);

      if (this.isPackages) {
        const meta = (this.application.renderer as MarkdownRenderer)
          ?.packagesMeta[reflection.name];
        if (
          meta &&
          (reflection as DeclarationReflection).readme &&
          !this.mergeReadme
        ) {
          const packageEntryFileName = meta.options.isSet('entryFileName')
            ? meta.options.getValue('entryFileName')
            : this.entryFileName;

          this.fullUrls.set(
            reflection,
            replaceFilename(actualName, packageEntryFileName),
          );

          outPages.push({
            kind: PageKind.Index,
            model: reflection,
            url: replaceFilename(actualName, packageEntryFileName),
          });
        }
      }

      if (
        [
          'Module',
          'Namespace',
          'Document',
          ...this.membersWithOwnFile,
        ].includes(this.kindsToString.get(reflection.kind)!)
      ) {
        if (shouldWritePage) {
          this.sluggers.set(reflection, new Slugger(this.sluggerConfiguration));
          outPages.push({
            kind,
            model: reflection,
            url: actualName,
          });
        }
      } else {
        this.buildAnchors(reflection, reflection.parent!);
      }

      reflection.traverse((child) => {
        this.buildChildPages(child, outPages);
        return true;
      });
    } else {
      this.buildAnchors(reflection, reflection.parent!);
    }
  }

  shouldWritePage(reflection: Reflection): boolean {
    if (this.isPackages) {
      const meta = (this.application.renderer as MarkdownRenderer)
        ?.packagesMeta[reflection.name];

      const hasEntryModule =
        meta?.options?.isSet('entryModule') &&
        Boolean(
          (reflection as DeclarationReflection).children?.find(
            (child) => child.name === meta?.options?.getValue('entryModule'),
          ),
        );

      if (meta) {
        return !hasEntryModule;
      }
    }
    if (reflection.name === this.entryModule) {
      return false;
    }

    return true;
  }

  override getIdealBaseNameVerbose(reflection: Reflection): string {
    let dir: string | null = null;
    let fileName = '';
    switch (reflection.kind) {
      case ReflectionKind.Module:
        dir = this.getModuleDirectory(reflection);
        fileName = this.getModuleFileName(reflection);
        break;
      case ReflectionKind.Namespace:
        dir = this.getNamespaceDirectory(reflection);
        fileName = this.entryFileName;
        break;
      case ReflectionKind.Document:
        dir = this.getDocumentDirectory(reflection);
        fileName = this.getReflectionAlias(reflection);
        break;
      default:
        dir = this.getReflectionDirectory(reflection);
        fileName = this.getReflectionFileName(reflection);
        break;
    }
    let fullName = path
      .join([dir, fileName].filter((part) => !!part).join('/'))
      .replace(/\\/g, '/')
      .replace(/ /g, '-');

    if (this.ignoreScopes) {
      fullName = removeFirstScopedDirectory(fullName);
    }
    return fullName;
  }

  getModuleDirectory(reflection: Reflection): string | null {
    if (this.entryModule && reflection.name === this.entryModule) {
      return null;
    }
    if (reflection.parent?.kind === ReflectionKind.Module) {
      if (this.isPackages) {
        const meta = (this.application.renderer as MarkdownRenderer)
          ?.packagesMeta[reflection.parent.name];
        const packageEntryModule = meta?.options?.getValue('entryModule');
        if (packageEntryModule === reflection.name) {
          return this.getReflectionAlias(reflection.parent);
        }
      }
      return `${this.getReflectionAlias(reflection.parent)}/${this.getReflectionAlias(reflection)}`;
    }
    return this.getReflectionAlias(reflection);
  }

  getModuleFileName(reflection: Reflection): string {
    if (this.isPackages && !this.mergeReadme) {
      const meta = (this.application.renderer as MarkdownRenderer)
        ?.packagesMeta[reflection.name];
      if (meta && (reflection as DeclarationReflection).readme) {
        return this.getModulesFileName(reflection);
      }
    }

    if (this.isPackages) {
      const packageEntryModule = this.getPackageEntryModule(reflection);
      if (packageEntryModule) {
        return this.getModuleFileName(packageEntryModule);
      }
    }

    if (reflection.parent?.kind === ReflectionKind.Module) {
      if (this.isPackages) {
        const meta = (this.application.renderer as MarkdownRenderer)
          ?.packagesMeta[reflection.parent.name];
        const packageEntryModule = meta?.options?.getValue('entryModule');
        const packageEntryFileName = meta?.options?.getValue('entryFileName');
        if (packageEntryModule === reflection.name) {
          return packageEntryFileName;
        }
      }
    }
    return this.entryFileName;
  }
  getNamespaceDirectory(reflection: Reflection): string {
    if (reflection.parent) {
      return `${this.getIdealBaseName(reflection.parent).replace(/\/[^/]+$/, '')}/${this.directories.get(reflection.kind)!}/${this.getReflectionAlias(reflection)}`;
    }
    return this.getReflectionAlias(reflection);
  }

  getDocumentDirectory(reflection: Reflection): string {
    if (
      reflection.parent &&
      reflection.parent.kind !== ReflectionKind.Project
    ) {
      return `${this.getIdealBaseName(reflection.parent).replace(/\/[^/]+$/, '')}/${this.directories.get(reflection.kind)!}`;
    }
    return `${this.directories.get(reflection.kind)!}`;
  }

  getReflectionDirectory(reflection: Reflection): string {
    if (reflection.parent) {
      if (reflection.parent?.kind === ReflectionKind.Namespace) {
        return `${this.getIdealBaseName(reflection.parent).replace(/\/[^/]+$/, '')}/${this.directories.get(reflection.kind)!}`;
      }
      if (reflection.parent?.kind === ReflectionKind.Module) {
        if (this.entryModule && reflection.parent.name === this.entryModule) {
          return `${this.getReflectionAlias(reflection.parent)}/${this.directories.get(reflection.kind)!}`;
        }
        if (this.isPackages) {
          if (reflection?.parent?.parent) {
            const meta = (this.application.renderer as MarkdownRenderer)
              ?.packagesMeta[reflection.parent.parent.name];
            const packageEntryModule = meta?.options?.getValue('entryModule');
            if (packageEntryModule === reflection.parent?.name) {
              return `${this.getReflectionAlias(reflection.parent.parent)}/${this.getReflectionAlias(reflection.parent)}/${this.directories.get(reflection.kind)!}`;
            }
          }
        }
        return `${this.getIdealBaseName(reflection.parent).replace(/\/[^/]+$/, '')}/${this.directories.get(reflection.kind)!}`;
      }
      if (reflection.parent?.kind === ReflectionKind.Project) {
        return `${this.directories.get(reflection.kind)!}`;
      }
      return `${this.getReflectionAlias(reflection.parent)}/${this.directories.get(reflection.kind)!}`;
    }
    return '';
  }

  getReflectionFileName(reflection: Reflection) {
    return this.getReflectionAlias(reflection);
  }
}
