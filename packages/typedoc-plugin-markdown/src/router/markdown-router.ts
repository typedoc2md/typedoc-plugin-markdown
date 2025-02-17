import { isQuoted, toPascalCase } from '@plugin/libs/utils/index.js';
import { MarkdownRenderer, NavigationItem } from '@plugin/types/index.js';
import path from 'path';
import {
  BaseRouter,
  DeclarationReflection,
  EntryPointStrategy,
  i18n,
  PageDefinition,
  PageKind,
  ProjectReflection,
  Reflection,
  ReflectionKind,
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
  useHTMLAnchors = this.application.options.getValue('useHTMLAnchors');
  enumMembersFormat = this.application.options.getValue('enumMembersFormat');

  entryUrl: string;
  readmeURL: string;

  navigation: NavigationItem[] = [];

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

  labels = new Map<ReflectionKind, string>([
    [ReflectionKind.Class, i18n.kind_plural_class()],
    [ReflectionKind.Interface, i18n.kind_plural_interface()],
    [ReflectionKind.Enum, i18n.kind_plural_enum()],
    [ReflectionKind.Namespace, i18n.kind_plural_namespace()],
    [ReflectionKind.TypeAlias, i18n.kind_plural_type_alias()],
    [ReflectionKind.Function, i18n.kind_plural_function()],
    [ReflectionKind.Variable, i18n.kind_plural_variable()],
    [ReflectionKind.Document, i18n.kind_plural_document()],
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

  protected abstract getIdealBaseNameVerbose(reflection: Reflection): string;

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
        this.readmeURL = pages[1].url;
        this.fullUrls.set(project, pages[0].url);
      }
      this.entryUrl = pages[0].url;
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
        this.readmeURL = pages[0].url;
        this.entryUrl = pages[1].url;
      } else {
        pages.push({
          url: this.getFileName(this.entryFileName),
          kind: PageKind.Reflection,
          model: project,
        });
        this.entryUrl = pages[0].url;
      }

      this.fullUrls.set(project, pages[pages.length - 1].url);
    }

    this.parseChildPages(project, pages);

    return pages;
  }

  parseChildPages(project: ProjectReflection, pages: PageDefinition[]) {
    for (const child of project.childrenIncludingDocuments || []) {
      this.buildChildPages(child, pages);
    }
  }

  getIdealBaseName(reflection: Reflection): string {
    if (this.application.options.getValue('flattenOutputFiles')) {
      return this.getIdealBaseNameFlattened(reflection);
    } else {
      return this.getIdealBaseNameVerbose(reflection);
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
    return `${fullNameParts.join('.')}`
      .replace(/"/g, '')
      .replace(/ /g, '-')
      .replace(/^\./g, '');
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
  getPackageEntryFileName(reflection: Reflection): string | undefined {
    const meta = (this.application.renderer as MarkdownRenderer)?.packagesMeta[
      reflection.name
    ];
    return meta.options.isSet('entryFileName')
      ? meta.options.getValue('entryFileName')
      : this.entryFileName;
  }

  getPackageLink(reflection: Reflection) {
    const meta = (this.application.renderer as MarkdownRenderer)?.packagesMeta[
      reflection.name
    ];
    if (meta && (reflection as DeclarationReflection).readme) {
      return `${this.getModulesFileName(reflection)}${this.extension}`;
    }
    return `${this.getPackageEntryFileName(reflection)}${this.extension}`;
  }

  getMarkdownFileName(baseName: string, allowDuplicate = false): string {
    if (allowDuplicate) {
      return `${baseName}${this.extension}`;
    }
    return this.getFileName(baseName);
  }
}
