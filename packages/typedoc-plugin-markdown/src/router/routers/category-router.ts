import { MarkdownRenderer } from '@plugin/types/markdown-renderer.js';
import {
  DeclarationReflection,
  PageDefinition,
  PageKind,
  ProjectReflection,
  Reflection,
  ReflectionCategory,
  ReflectionKind,
} from 'typedoc';
import { KindRouter } from './kind-router.js';

export class CategoryRouter extends KindRouter {
  override buildChildPages(
    reflection: Reflection,
    outPages: PageDefinition[],
  ): void {
    const kind = this.getPageKind(reflection);
    const idealName = this.getIdealBaseName(reflection);
    const actualName = this.getMarkdownFileName(idealName);
    this.fullUrls.set(reflection, actualName);

    if (this.isPackages) {
      const meta = (this.application.renderer as MarkdownRenderer)
        ?.packagesMeta[reflection.name];
      const replaceFilename = (originalPath: string, newFileName: string) => {
        return originalPath.replace(/\/[^/]+(\.[^/.]+)$/, `/${newFileName}$1`);
      };
      if (
        meta &&
        (reflection as DeclarationReflection).readme &&
        !this.mergeReadme
      ) {
        const packageEntryFileName = meta.options.isSet('entryFileName')
          ? meta.options.getValue('entryFileName')
          : this.entryFileName;
        outPages.push({
          kind: PageKind.Index,
          model: reflection,
          url: replaceFilename(actualName, packageEntryFileName),
        });
      }
    }

    if (kind) {
      outPages.push({
        kind,
        model: reflection,
        url: actualName,
      });

      this.fullUrls.set(reflection, actualName);

      if ((reflection as DeclarationReflection).categories?.length) {
        (reflection as DeclarationReflection).categories?.forEach(
          (category: any) => {
            category.name = category.title;
            category.parent = reflection;
            category.project = reflection.project;
            category.getFullName = () => category.title;
            category.isProject = () => false;

            const idealName = this.getIdealBaseName(category as any);
            const actualName = this.getMarkdownFileName(idealName);
            this.fullUrls.set(category as any, actualName);

            outPages.push({
              kind,
              model: category as any,
              url: actualName,
            });

            category.children.forEach((catChild: Reflection) => {
              if (
                [ReflectionKind.Namespace, ReflectionKind.Document].includes(
                  catChild.kind,
                )
              ) {
                this.buildChildPages(catChild, outPages);
              }
            });
          },
        );
      } else {
        reflection.traverse((child) => {
          this.buildChildPages(child, outPages);
          return true;
        });
      }
    } else {
      this.buildAnchors(reflection, reflection.parent!);
    }
  }

  parseChildPages(project: ProjectReflection, pages: PageDefinition[]) {
    if (project.categories?.length) {
      project.categories.forEach((category: any) => {
        category.name = category.title;
        category.parent = project;
        category.project = project;
        category.getFullName = () => category.title;
        category.isProject = () => false;

        const idealName = this.getIdealBaseName(category as any);
        const actualName = this.getMarkdownFileName(idealName);
        this.fullUrls.set(category as any, actualName);

        pages.push({
          kind: PageKind.Reflection,
          model: category as any,
          url: actualName,
        });

        category.children.forEach((catChild: Reflection) => {
          if (catChild.kind === ReflectionKind.Namespace) {
            this.buildChildPages(catChild, pages);
          }
        });
      });
    } else {
      for (const child of project.childrenIncludingDocuments || []) {
        this.buildChildPages(child, pages);
      }
    }
  }

  getReflectionDirectory(reflection: Reflection): string {
    if (reflection.parent && reflection instanceof ReflectionCategory) {
      if (
        reflection.parent?.kind === ReflectionKind.Module ||
        reflection.parent?.kind === ReflectionKind.Namespace
      ) {
        return this.getIdealBaseName(reflection.parent).replace(/\/[^/]+$/, '');
      }
      return '';
    }
    return super.getReflectionDirectory(reflection);
  }

  getNamespaceDirectory(reflection: Reflection): string {
    if (reflection.parent) {
      return `a${this.getReflectionDirectory(reflection).replace(/\/[^/]+$/, '')}/${reflection.name}/${this.directories.get(reflection.kind)!}/${this.getReflectionAlias(reflection)}`;
    }
    return 'b' + this.getReflectionAlias(reflection);
  }
}
