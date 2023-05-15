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
import { OutputFileStrategy, TemplateMapping } from '../models';
import { INDEX_PLACEHOLDER_KEY } from '../support/constants';
import { slugify } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-render-context';
import { UrlOption } from './models';

export class UrlBuilder {
  urls: UrlMapping[] = [];
  anchors: string[] = [];

  constructor(public context: MarkdownThemeRenderContext) {}

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
    const entryFileName = this.context.getOption('entryFileName');
    const hasReadme = !this.context.getOption('readme').endsWith('none');

    if (hasReadme) {
      this.urls.push(
        new UrlMapping(
          this.context.getOption('entryFileName'),
          project,
          this.readmeTemplate,
        ),
      );

      if (this.skipIndexPage(project)) {
        project.url = this.context.getOption('entryFileName');
      } else {
        project.url = this.getPartName(this.context.indexFileName, 1);
        this.urls.push(
          new UrlMapping(
            this.getPartName(this.context.indexFileName, 1),
            project,
            this.projectTemplate,
          ),
        );
      }
    } else {
      project.url = entryFileName;
      this.urls.push(
        new UrlMapping(entryFileName, project, this.projectTemplate),
      );
    }

    if (
      (this.context.getOption(
        'entryPointStrategy',
      ) as unknown as EntryPointStrategy) === EntryPointStrategy.Packages
    ) {
      project.children?.forEach((projectChild, projectChildIndex) => {
        const startIndex = hasReadme ? 2 : 1;

        const directoryPosition = projectChildIndex + startIndex;
        const url = `${this.getPartName(
          projectChild.name,
          directoryPosition,
        )}/${
          Boolean(projectChild.readme)
            ? this.getPartName(this.context.indexFileName, 1)
            : this.context.getOption('entryFileName')
        }`;
        if (projectChild.readme) {
          this.urls.push(
            new UrlMapping(
              `${path.dirname(url)}/${this.context.getOption('entryFileName')}`,
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

  skipIndexPage(project: ProjectReflection) {
    if (
      project.readme &&
      this.context.partials
        .commentParts(project.readme)
        .includes(INDEX_PLACEHOLDER_KEY)
    ) {
      return true;
    }

    if (this.context.options.skipIndexPage) {
      if (
        this.context.options.entryPoints?.length === 1 &&
        this.context.options.outputFileStrategy === OutputFileStrategy.Modules
      ) {
        this.context.theme.application.logger.warn(
          `[typedoc-plugin-markdown] Ignoring 'skipIndexPage'. Can not skip index page as it contains exported symbols.`,
        );
        return false;
      }
      return true;
    }
    return false;
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

    if (this.context.getOption('excludeGroups')) {
      project.children?.forEach((projectGroupChild, projectGroupChildIndex) => {
        this.buildUrlsFromGroup(projectGroupChild, {
          directoryPosition: projectGroupChildIndex + startIndex,
          pagePosition: projectGroupChildIndex + startIndex,
          ...(parentUrl && { parentUrl: parentUrl }),
        });
      });
    } else {
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
  }

  private buildUrlsFromGroup(
    reflection: DeclarationReflection,
    options: UrlOption,
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

      if (this.context.getOption('excludeGroups')) {
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
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
  }

  private getUrl(reflection: DeclarationReflection, options: UrlOption) {
    if (this.context.getOption('flattenOutputFiles')) {
      const kindAlias = ReflectionKind.singularString(reflection.kind).split(
        ' ',
      )[0];
      if (options.parentUrl) {
        return `${path
          .dirname(options.parentUrl.split('.').join('/'))
          .split('/')
          .join('.')}.${kindAlias}.${reflection.name.replace(/\//, '_')}.md`;
      }
      const friendlyName = `${reflection.name.replace(/\//, '_')}.md`;
      return reflection.kindOf(ReflectionKind.Module)
        ? friendlyName
        : `${kindAlias}.${friendlyName}`;
    }

    // remove leading underscores
    const alias = reflection.getAlias().replace(/^_/, '');

    const parentDir = options.parentUrl
      ? path.dirname(options.parentUrl)
      : null;

    const dir = () => {
      if (reflection.kindOf(ReflectionKind.Namespace)) {
        if (!this.context.getOption('excludeGroups')) {
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
        this.context.getOption('excludeGroups') &&
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
        this.context.getOption('outputFileStrategy') ===
          OutputFileStrategy.Modules &&
        !this.childrenIncludeNamespaces(reflection)
      ) {
        return null;
      }
      if (
        reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])
      ) {
        return path.parse(this.context.getOption('entryFileName')).name;
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
        const anchorPattern = this.context.getOption('anchorPattern');
        const anchorId = anchorPattern
          ? anchorPattern.replace('{{anchor}}', this.getAnchorId(reflection))
          : this.getAnchorId(reflection);

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
    return this.context.getOption('includeFileNumberPrefixes')
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
      return this.context.getOption('includeFileNumberPrefixes')
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
