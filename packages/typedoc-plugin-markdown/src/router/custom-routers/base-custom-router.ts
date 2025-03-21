import { getHierarchyRoots } from '@plugin/theme/lib/index.js';
import { MarkdownRenderer } from '@plugin/types/index.js';
import path from 'path';
import {
  BaseRouter,
  DeclarationReflection,
  EntryPointStrategy,
  PageDefinition,
  PageKind,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  RouterTarget,
  Slugger,
} from 'typedoc';

export abstract class BaseCustomRouter extends BaseRouter {
  override extension = this.application.options.getValue('fileExtension');

  outputFileStrategy = this.application.options.getValue('outputFileStrategy');
  entryModule = this.application.options.getValue('entryModule');
  ignoreScopes = this.application.options.getValue('excludeScopesInPaths');
  modulesFileName = path.parse(
    this.application.options.getValue('modulesFileName'),
  ).name;
  entryFileName = path.parse(this.application.options.getValue('entryFileName'))
    .name;
  isPackages =
    this.application.options.getValue('entryPointStrategy') ===
    EntryPointStrategy.Packages;
  membersWithOwnFile = this.application.options.getValue('membersWithOwnFile');
  mergeReadme = this.application.options.getValue('mergeReadme');
  anchorPrefix = this.application.options.getValue('anchorPrefix');

  directories = new Map<ReflectionKind, string>([
    [ReflectionKind.Class, 'classes'],
    [ReflectionKind.Interface, 'interfaces'],
    [ReflectionKind.Enum, 'enumerations'],
    [ReflectionKind.Namespace, 'namespaces'],
    [ReflectionKind.TypeAlias, 'type-aliases'],
    [ReflectionKind.Function, 'functions'],
    [ReflectionKind.Variable, 'variables'],
    [ReflectionKind.Document, 'documents'],
  ]);

  kindsToString = new Map<ReflectionKind, string>([
    [ReflectionKind.Module, 'Module'],
    [ReflectionKind.Namespace, 'Namespace'],
    [ReflectionKind.Document, 'Document'],
    [ReflectionKind.Class, 'Class'],
    [ReflectionKind.Interface, 'Interface'],
    [ReflectionKind.Enum, 'Enum'],
    [ReflectionKind.TypeAlias, 'TypeAlias'],
    [ReflectionKind.Function, 'Function'],
    [ReflectionKind.Variable, 'Variable'],
  ]);

  override buildPages(project: ProjectReflection) {
    this.usedFileNames = new Set();
    this.sluggers = new Map([
      [project, new Slugger(this.sluggerConfiguration)],
    ]);

    const pages: PageDefinition[] = [];

    const entryModule = project?.groups?.[0]?.children.find(
      (child) => child.name === this.entryModule,
    );

    if (entryModule) {
      pages.push({
        url: this.getFileName(this.entryFileName),
        kind: PageKind.Reflection,
        model: entryModule,
      });
      if (project.readme?.length) {
        pages.push({
          url: this.getFileName(this.entryFileName),
          kind: PageKind.Index,
          model: project,
        });
        this.fullUrls.set(project, pages[0].url);
      }
    } else {
      if (project.readme?.length && !this.mergeReadme) {
        pages.push({
          url: this.getFileName(this.entryFileName),
          kind: PageKind.Index,
          model: project,
        });
        pages.push({
          url: this.getFileName(this.getModulesFileName(project)),
          kind: PageKind.Reflection,
          model: project,
        });
      } else {
        pages.push({
          url: this.getFileName(this.entryFileName),
          kind: PageKind.Reflection,
          model: project,
        });
      }

      this.fullUrls.set(project, pages[pages.length - 1].url);
    }

    if (this.includeHierarchySummary && getHierarchyRoots(project)) {
      pages.push({
        url: this.getFileName('hierarchy'),
        kind: PageKind.Hierarchy,
        model: project,
      });
    }

    this.parseChildPages(project, pages);

    return pages;
  }

  override getAnchor(target: RouterTarget) {
    if (this.anchorPrefix) {
      return `${this.anchorPrefix}${super.getAnchor(target)}`;
    }
    return super.getAnchor(target);
  }

  private parseChildPages(project: ProjectReflection, pages: PageDefinition[]) {
    for (const child of project.childrenIncludingDocuments || []) {
      this.buildChildPages(child, pages);
    }
  }

  getModulesFileName(reflection: Reflection): string {
    if (this.modulesFileName) {
      return this.modulesFileName;
    }
    if (this.isPackages && reflection.kind === ReflectionKind.Project) {
      return 'packages';
    }
    const isModules = (reflection as DeclarationReflection).children?.every(
      (child) => child.kind === ReflectionKind.Module,
    );
    return isModules ? 'modules' : 'globals';
  }

  getPackageEntryModule(reflection: Reflection): Reflection | undefined {
    const meta = (this.application.renderer as MarkdownRenderer)?.packagesMeta[
      reflection.name
    ];
    if (meta?.options?.isSet('entryModule')) {
      return (reflection as DeclarationReflection).children?.find(
        (child) => child.name === meta?.options?.getValue('entryModule'),
      );
    }
    return undefined;
  }
}
