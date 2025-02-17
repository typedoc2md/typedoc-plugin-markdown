import { MarkdownRenderer } from '@plugin/types/markdown-renderer.js';
import {
  DeclarationReflection,
  PageDefinition,
  PageKind,
  ProjectReflection,
  Reflection,
  ReflectionGroup,
  ReflectionKind,
} from 'typedoc';
import { KindRouter } from './kind-router.js';

export class GroupRouter extends KindRouter {
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

      const isModules = (reflection as DeclarationReflection).children?.every(
        (child) => child.kind === ReflectionKind.Module,
      );

      if (isModules) {
        this.parseChildPages(reflection as ProjectReflection, outPages);
      } else {
        if ((reflection as DeclarationReflection).groups?.length) {
          (reflection as DeclarationReflection).groups?.forEach(
            (group: any) => {
              group.name = group.title;
              group.parent = reflection;
              group.project = reflection.project;
              group.getFullName = () => group.title;
              group.isProject = () => false;

              const idealName = this.getIdealBaseName(group as any);
              const actualName = this.getMarkdownFileName(idealName);
              this.fullUrls.set(group as any, actualName);

              outPages.push({
                kind,
                model: group as any,
                url: actualName,
              });

              group.children.forEach((catChild: Reflection) => {
                if (catChild.kind === ReflectionKind.Namespace) {
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
      }
    } else {
      this.buildAnchors(reflection, reflection.parent!);
    }
  }

  parseChildPages(project: ProjectReflection, pages: PageDefinition[]) {
    const isModules = project.children?.every(
      (child) => child.kind === ReflectionKind.Module,
    );
    if (isModules) {
      for (const child of project.childrenIncludingDocuments || []) {
        this.buildChildPages(child, pages);
      }
    } else {
      if (project.groups?.length) {
        project.groups?.forEach((group: any) => {
          group.name = group.title;
          group.parent = project;
          group.project = project;
          group.getFullName = () => group.title;
          group.isProject = () => false;

          const idealName = this.getIdealBaseName(group as any);
          const actualName = this.getMarkdownFileName(idealName);
          this.fullUrls.set(group as any, actualName);

          pages.push({
            kind: PageKind.Reflection,
            model: group as any,
            url: actualName,
          });

          group.children.forEach((catChild: Reflection) => {
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
  }

  getReflectionDirectory(reflection: Reflection): string {
    if (reflection.parent && reflection instanceof ReflectionGroup) {
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
    if (
      reflection.parent &&
      reflection.parent.kind === ReflectionKind.Project
    ) {
      return `${this.directories.get(reflection.kind)!}/${this.getReflectionAlias(reflection)}`;
    }
    return super.getNamespaceDirectory(reflection);
  }
}
