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
import { getAnchorName } from './anchor-name.js';

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
  anchorPrefix = this.application.options.getValue('anchorPrefix') ?? '';
  parametersFormat = this.application.options.getValue('parametersFormat');

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
    {
      targetKind: ReflectionKind.TypeParameter,
      parentKind: ReflectionKind.All,
      option: 'parametersFormat',
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
    // Search the project's children, not only its first group: with project
    // documents the first group is "Documents" and the module was never found.
    const entryModule = project?.children?.find((child) =>
      this.isEntryModule(child),
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

    // --------------------------------------------
    // typedoc-plugin-markdown customization (start)
    // --------------------------------------------

    // The method carries the anchor, so its call signatures get none, but the
    // signature's type parameters are still traversed below.
    const isMethodSignature =
      target.kindOf(ReflectionKind.CallSignature) &&
      !!target.parent?.kindOf(ReflectionKind.Method);

    if (target.isTypeParameter() && this.parametersFormat === 'none') {
      // Type parameters are not rendered at all, so must not take an anchor.
      return;
    }

    // ------------------------------------------
    // typedoc-plugin-markdown customization (end)
    // -------------------------------------------

    if (!target.kindOf(ReflectionKind.TypeLiteral) && !isMethodSignature) {
      let refl: Reflection | undefined = target;
      const parts = [getAnchorName(target)];
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

      let toSlug = parts.join('.');

      if (this.isSluggedByName(target, pageTarget)) {
        toSlug = target.name;
      }

      if (
        this.tableAnchorRules.some((r) =>
          this.isTableAnchor(target, r.targetKind, r.parentKind, r.option),
        )
      ) {
        toSlug = `${ReflectionKind.singularString(target.kind)}-${toSlug}`;
      }

      if (target.kindOf(ReflectionKind.Class) && target.flags?.isAbstract) {
        toSlug = `abstract-${toSlug}`;
      }

      // The prefix is stored with the anchor so that same-page anchors and
      // cross-page URLs (built from fullUrls) both carry it.
      const anchor = `${this.anchorPrefix}${this.getSlugger(pageTarget).slug(toSlug)}`;

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

  /**
   * Whether a type parameter is slugged from its bare name rather than its
   * qualified path. In list format its anchor is its heading, which renderers
   * slug from the bare name, so the router must match it; table anchors follow
   * the same rule so both formats name a type parameter alike.
   *
   * The module and member routers anchor a member twice: first relative to the
   * page, then relative to its parent, and only the second anchor is kept. The
   * bare name is therefore used only when the owner of the type parameter (past
   * its signature and method) is `pageTarget`; a bare slug in the first pass
   * would push the kept anchor to `-1`.
   */
  private isSluggedByName(target: Reflection, pageTarget: Reflection): boolean {
    if (!target.isTypeParameter()) {
      return false;
    }
    let owner: Reflection | undefined = target.parent;
    while (
      owner &&
      owner !== pageTarget &&
      owner.kindOf(ReflectionKind.SomeSignature | ReflectionKind.Method)
    ) {
      owner = owner.parent;
    }
    return owner === pageTarget;
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
    const finalName = removeUnsafeFileNameChars(`${fullNameParts.join('.')}`)
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

    const alias = removeUnsafeFileNameChars(name)
      .replace(/"/g, '')
      .replace(/^_+|_+$/g, '')
      .replace(/[<>]/g, '-');

    // A name made only of underscores (e.g. `_`) would otherwise be empty.
    return alias || removeUnsafeFileNameChars(name).replace(/"/g, '');
  }

  /**
   * Whether the reflection is the module named by the (deprecated)
   * "entryModule" option. Only modules match, so a function or class sharing
   * the name keeps its own page.
   */
  isEntryModule(reflection: Reflection): boolean {
    return (
      Boolean(this.entryModule) &&
      reflection.kindOf(ReflectionKind.Module) &&
      reflection.name === this.entryModule
    );
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

/**
 * Removes characters that break a relative link to the file on every
 * platform: `#` starts a fragment, `?` starts a query and `\` is a path
 * separator on Windows and an escape in markdown.
 */
function removeUnsafeFileNameChars(name: string) {
  return name.replace(/[#?\\]/g, '');
}
