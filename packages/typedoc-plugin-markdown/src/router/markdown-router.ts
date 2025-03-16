import {
  isQuoted,
  removeFirstScopedDirectory,
  toPascalCase,
} from '@plugin/libs/utils/index.js';
import { getHierarchyRoots } from '@plugin/theme/lib/index.js';
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

export abstract class MarkdownRouter extends BaseRouter {
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

    // Note: The concept of "entryModule" is being deprecated in favour of custom router implementations.
    // The concept is hard to understand and makes the code unnecessarily complex.
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

    if (
      this.application.options.isSet('includeHierarchySummary') &&
      this.includeHierarchySummary &&
      getHierarchyRoots(project)?.length
    ) {
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

  getIdealBaseNameFlattened(reflection: Reflection): string {
    const fullName = reflection.getFullName();
    const fullNameParts = fullName.replace(/\//g, '.').split('.');
    if (reflection.kind !== ReflectionKind.Module) {
      if (
        reflection.kind === ReflectionKind.Document &&
        reflection?.parent?.kind === ReflectionKind.Project
      ) {
        fullNameParts.splice(
          0,
          0,
          toPascalCase(ReflectionKind.singularString(reflection.kind)),
        );
      } else {
        fullNameParts.splice(
          fullNameParts.length - 1,
          0,
          toPascalCase(ReflectionKind.singularString(reflection.kind)),
        );
      }
    }
    const finalName = `${fullNameParts.join('.')}`
      .replace(/"/g, '')
      .replace(/ /g, '-')
      .replace(/^\./g, '');
    if (this.ignoreScopes) {
      return removeFirstScopedDirectory(finalName, '.');
    }
    return finalName;
  }

  getReflectionAlias(reflection: Reflection): string {
    let name = reflection.name;

    if (isQuoted(reflection.name)) {
      name = name.replace(/\//g, '_');
    }

    return name
      .replace(/"/g, '')
      .replace(/^_+|_+$/g, '')
      .replace(/[<>]/g, '-');
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
}
