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

  tableAnchorRules = [
    {
      targetKind: ReflectionKind.Property,
      parentKind: ReflectionKind.TypeAlias,
      option: 'typeAliasPropertiesFormat',
    },
    {
      targetKind: ReflectionKind.Property,
      parentKind: ReflectionKind.Interface,
      option: 'interfacePropertiesFormat',
    },
    {
      targetKind: ReflectionKind.Property,
      parentKind: ReflectionKind.TypeLiteral,
      option: 'typeDeclarationFormat',
    },
    {
      targetKind: ReflectionKind.Property,
      parentKind: ReflectionKind.Class,
      option: 'classPropertiesFormat',
    },
    {
      targetKind: ReflectionKind.EnumMember,
      parentKind: ReflectionKind.Enum,
      option: 'enumMembersFormat',
    },
  ];

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

  /**
   * This is essentially a copy of the BaseRouter implementation, but adjusted to
   * generate anchors in a way that is compatible with markdown links.
   */
  protected buildAnchors(target: RouterTarget, pageTarget: RouterTarget): void {
    if (
      !(target instanceof Reflection) ||
      !(pageTarget instanceof Reflection)
    ) {
      return;
    }

    if (
      !target.isDeclaration() &&
      !target.isSignature() &&
      !target.isTypeParameter() &&
      !target.kindOf(ReflectionKind.TypeLiteral)
    ) {
      return;
    }

    // We support linking to reflections for types directly contained within an export
    // but not any deeper. This is because TypeDoc may or may not render the type details
    // for a property depending on whether or not it is deemed useful, and defining a link
    // which might not be used may result in a link being generated which isn't valid. #2808.
    // This should be kept in sync with the renderingChildIsUseful function.
    if (
      target.kindOf(ReflectionKind.TypeLiteral) &&
      (!target.parent?.kindOf(ReflectionKind.SomeExport) ||
        (target.parent as DeclarationReflection).type?.type !== 'reflection')
    ) {
      return;
    }

    if (!target.kindOf(ReflectionKind.TypeLiteral)) {
      let refl: Reflection | undefined = target;
      const parts = [refl.name];
      while (refl.parent && refl.parent !== pageTarget) {
        refl = refl.parent;
        // Avoid duplicate names for signatures and useless __type in anchors
        if (
          !refl.kindOf(
            ReflectionKind.TypeLiteral | ReflectionKind.FunctionOrMethod,
          )
        ) {
          parts.unshift(refl.name);
        }
      }

      // --------------------------------------------
      // typedoc-plugin-markdown customization (start)
      // --------------------------------------------

      if (
        target.kindOf(ReflectionKind.CallSignature) &&
        target.parent?.kindOf(ReflectionKind.Method)
      ) {
        return;
      }

      let toSlug = parts.join('.');

      if (
        this.tableAnchorRules.some((r) =>
          this.isTableAnchor(target, r.targetKind, r.parentKind, r.option),
        )
      ) {
        toSlug = `${ReflectionKind.singularString(target.kind)}-${toSlug}`;
      }

      const anchor = this.getSlugger(pageTarget).slug(toSlug);

      // ------------------------------------------
      // typedoc-plugin-markdown customization (end)
      // -------------------------------------------

      this.fullUrls.set(target, this.fullUrls.get(pageTarget)! + '#' + anchor);
      this.anchors.set(target, anchor);
    }

    target.traverse((child) => {
      this.buildAnchors(child, pageTarget);
      return true;
    });
  }

  private isTableAnchor(
    target: Reflection,
    targetKind: ReflectionKind,
    parentKind: ReflectionKind,
    option: string,
  ): boolean {
    return (
      !!target.kindOf(targetKind) &&
      !!target.parent?.kindOf(parentKind) &&
      (this.application.options.getValue(option) as string)
        .toLowerCase()
        .endsWith('table')
    );
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
