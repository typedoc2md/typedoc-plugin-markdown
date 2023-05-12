import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  UrlMapping,
} from 'typedoc';
import {
  OutputFileStrategy,
  TemplateMapping,
  TypedocPluginMarkdownOptions,
} from '../models';
import { slugify } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-render-context';

export interface UrlBuilderOptions {
  readme: string;
  includeFileNumberPrefixes: boolean;
}

export interface GetUrlOptions {
  parentUrl?: string;
  directory?: string | null;
  forceDirectory?: boolean;
  directoryPosition: number;
  pagePosition: number;
}

export class UrlBuilder {
  urls: UrlMapping[] = [];
  anchors: string[] = [];

  constructor(
    public context: MarkdownThemeRenderContext,
    public options: Partial<TypedocPluginMarkdownOptions>,
  ) {}

  readmeTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.context.templates.readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.context.templates.projectTemplate(pageEvent);
  };

  reflectionTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.context.templates.reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.context.templates.memberTemplate(pageEvent);
  };

  /**
   * Map the models of the given project to the desired output files.
   * Based on TypeDoc DefaultTheme.getUrls()
   *
   * @param project  The project whose urls should be generated.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    if (!this.options.readme?.endsWith('none')) {
      const indexFileName = this.getPartName(this.context.indexFile, 1);
      project.url = indexFileName;
      this.urls.push(
        new UrlMapping(this.context.readmeFile, project, this.readmeTemplate),
      );
      this.urls.push(
        new UrlMapping(indexFileName, project, this.projectTemplate),
      );
    } else {
      project.url = this.context.indexFile;
      this.urls.push(
        new UrlMapping(this.context.indexFile, project, this.projectTemplate),
      );
    }

    if (
      (this.options.entryPointStrategy as unknown as EntryPointStrategy) ===
      'packages'
    ) {
      project.children?.forEach((projectChild, projectChildIndex) => {
        const startIndex = !this.options.readme?.endsWith('none') ? 2 : 1;
        const directoryPosition = projectChildIndex + startIndex;
        const url = `${this.getPartName(
          projectChild.name,
          directoryPosition,
        )}/${
          Boolean(projectChild.readme)
            ? this.getPartName(this.context.indexFile, 1)
            : this.context.indexFile
        }`;
        if (projectChild.readme) {
          this.urls.push(
            new UrlMapping(
              `${path.dirname(url)}/${this.context.readmeFile}`,
              projectChild as any,
              this.readmeTemplate,
            ),
          );
        }
        this.urls.push(
          new UrlMapping(url, projectChild as any, this.projectTemplate),
        );
        projectChild.url = url;
        this.buildUrlsFromProject(projectChild, url);
      });
    } else {
      this.buildUrlsFromProject(project);
    }

    return this.urls;
  }

  /**
   *
   * @param project
   * @param isPackage
   */
  private buildUrlsFromProject(
    project: ProjectReflection | DeclarationReflection,
    parentUrl?: string,
  ) {
    const startIndex = Boolean(project.readme) ? 2 : 1;
    project.groups?.forEach((projectGroup, projectGroupIndex) => {
      projectGroup.children.forEach(
        (projectGroupChild, projectGroupChildIndex) => {
          this.buildUrlsFromGroup(projectGroupChild, {
            directoryPosition: projectGroupIndex + startIndex,
            pagePosition: projectGroupChildIndex + startIndex,
            ...(parentUrl && { parentUrl: parentUrl }),
          });
        },
      );
    });
  }

  private buildUrlsFromGroup(
    reflection: DeclarationReflection,
    options: GetUrlOptions,
  ) {
    const mapping = this.getTemplateMapping(reflection.kind);
    if (mapping) {
      const directory = options.directory || mapping.directory;
      const url = this.getUrl(reflection, {
        ...options,
        directory,
      });

      this.urls.push(new UrlMapping(url, reflection, mapping.template));

      reflection.url = url;
      reflection.hasOwnDocument = true;

      if (this.options.excludeGroups) {
        if (reflection.categories) {
          reflection.categories.forEach((category, categoryIndex) => {
            category.children.forEach((categoryChild, categoryChildIndex) => {
              this.buildUrlsFromGroup(categoryChild, {
                parentUrl: url,
                directoryPosition: categoryIndex + 1,
                directory: category.title,
                pagePosition: categoryChildIndex + 1,
                forceDirectory: true,
              });
            });
          });
        } else {
          reflection.children?.forEach((groupChild, groupChildIndex) => {
            this.buildUrlsFromGroup(groupChild, {
              parentUrl: url,
              directoryPosition: groupChildIndex + 1,
              directory: null,
              pagePosition: groupChildIndex + 1,
            });
          });
        }
      } else {
        reflection.groups?.forEach((group, groupIndex) => {
          if (group.categories) {
            group.categories.forEach((category, categoryIndex) => {
              category.children.forEach((categoryChild, categoryChildIndex) => {
                const mapping = this.getTemplateMapping(categoryChild.kind);
                this.buildUrlsFromGroup(categoryChild, {
                  parentUrl: url,
                  directoryPosition: groupIndex + 1,
                  directory: `${mapping?.directory}/${this.getPartName(
                    category.title,
                    categoryIndex + 1,
                  )}`,
                  pagePosition: categoryChildIndex + 1,
                });
              });
            });
          } else {
            group.children.forEach((groupChild, groupChildIndex) => {
              const mapping = this.getTemplateMapping(groupChild.kind);
              this.buildUrlsFromGroup(groupChild, {
                parentUrl: url,
                directoryPosition: groupIndex + 1,
                directory: mapping?.directory || null,
                pagePosition: groupChildIndex + 1,
              });
            });
          }
        });
      }
      //}
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
  }

  private getUrl(reflection: DeclarationReflection, options: GetUrlOptions) {
    const parentDir = options.parentUrl
      ? path.dirname(options.parentUrl)
      : null;

    // remove leading underscores
    const alias = reflection.getAlias().replace(/^_/, '');

    const dir = () => {
      if (reflection.kindOf(ReflectionKind.Namespace)) {
        if (!this.options.excludeGroups) {
          return this.getPartName(
            `${options.directory}/${this.getPartName(
              'namespace.' + alias,
              options.pagePosition,
            )}`,
            options.directoryPosition,
          );
        }
        return this.getPartName(alias, options.pagePosition);
      }

      if (
        options.directory &&
        this.options.excludeGroups &&
        !options.forceDirectory
      ) {
        return null;
      }

      return options.directory
        ? this.getPartName(options.directory, options.directoryPosition)
        : `${this.getPartName(
            slugify(ReflectionKind.singularString(reflection.kind)),
            options.pagePosition,
          )}.${alias}`;
    };

    const filename = () => {
      if (
        reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace]) &&
        this.options.outputFileStrategy === OutputFileStrategy.Modules &&
        !this.childrenIncludeNamespaces(reflection)
      ) {
        return null;
      }
      if (
        reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])
      ) {
        return path.parse(this.context.indexFile).name;
      }
      return `${this.getPartName(
        slugify(ReflectionKind.singularString(reflection.kind)),
        options.pagePosition,
      )}.${alias}`;
    };

    return (
      [parentDir, dir(), filename()].filter((part) => Boolean(part)).join('/') +
      '.md'
    );
  }

  private applyAnchorUrl(
    reflection: DeclarationReflection,
    container: Reflection,
  ) {
    if (container.url && !reflection.url) {
      if (!reflection.kindOf(ReflectionKind.TypeLiteral)) {
        const anchorId = this.getAnchorId(reflection);

        const count = this.anchors[container.url]?.filter(
          (id) => id === anchorId,
        )?.length;

        const anchor =
          anchorId + (count > 1 ? '-' + (count - 1).toString() : '');
        this.anchors.push(anchorId);

        reflection.url = container.url + '#' + anchor;
        reflection.anchor = anchor;
      }
      reflection.hasOwnDocument = false;
    }
    reflection.traverse((child) => {
      if (child instanceof DeclarationReflection) {
        this.applyAnchorUrl(child, container);
      }
    });
  }

  private getAnchorId(reflection: DeclarationReflection) {
    const anchorFormat = this.context.getOption('anchorFormat');
    if (anchorFormat.toLowerCase() === 'lowercase') {
      return reflection.name.toLowerCase();
    }
    if (anchorFormat.toLowerCase() === 'slug') {
      return slugify(reflection.name);
    }
    return reflection.name;
  }

  private getPartName(part: string, position: number) {
    return this.options.includeFileNumberPrefixes
      ? `${String(position).padStart(2, '0')}-${part}`
      : part;
  }

  private childrenIncludeNamespaces(reflection: DeclarationReflection) {
    return reflection.children?.some((child) =>
      child.kindOf(ReflectionKind.Namespace),
    );
  }

  /**
   * Returns the template mapping for a given reflection kind
   * @param kind
   */
  private getTemplateMapping(kind: ReflectionKind): TemplateMapping {
    const getDirectoryName = (reflectionKind: ReflectionKind) => {
      const pluralString = ReflectionKind.pluralString(reflectionKind);
      return this.options.includeFileNumberPrefixes
        ? pluralString
        : slugify(pluralString);
    };

    const outputFileStrategy = this.context.getOption('outputFileStrategy');

    const mappings = {
      [ReflectionKind.Module]: {
        template: this.reflectionTemplate,
        directory: null,
        kind: ReflectionKind.Module,
      },
      [ReflectionKind.Namespace]: {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Namespace),
        kind: ReflectionKind.Namespace,
      },
    };

    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Class] = {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Class),
        kind: ReflectionKind.Class,
      };
    }
    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Interface),
        kind: ReflectionKind.Interface,
      };
    }
    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Enum] = {
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Enum),
        kind: ReflectionKind.Enum,
      };
    }
    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Function] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Function),
        kind: ReflectionKind.Function,
      };
    }
    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.TypeAlias] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.TypeAlias),
        kind: ReflectionKind.TypeAlias,
      };
    }
    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Variable] = {
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Variable),
        kind: ReflectionKind.Variable,
      };
    }
    return mappings[kind];
  }
}
