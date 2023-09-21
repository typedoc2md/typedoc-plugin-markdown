import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  TypeDocOptions,
} from 'typedoc';
import { OutputFileStrategy } from '../plugin/options/custom-maps';
import { UrlMapping } from '../plugin/url-mapping';
import { slugify } from '../support/utils';
import { NavigationItem, UrlOption } from '../theme/models';
import { getMemberTitle } from './helpers';
import { MarkdownTheme } from './theme';

export class UrlsContext {
  urls: UrlMapping[] = [];
  navigation: NavigationItem[] = [];

  anchors: Record<string, string[]> = {};

  constructor(
    public theme: MarkdownTheme,
    public options: Partial<TypeDocOptions>,
  ) {}

  /**
   * Map the models of the given project to the desired output files.
   * Based on TypeDoc DefaultTheme.getUrls()
   *
   * @param project  The project whose urls should be generated.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    const entryFileName = this.options.entryFileName as string;
    const indexFileName = this.options.indexFileName as string;
    const hasReadme = !this.options.readme?.endsWith('none');

    if (hasReadme) {
      project.url = indexFileName;
      this.urls.push(
        new UrlMapping(entryFileName, project, this.theme.readmeTemplate),
      );

      this.urls.push(
        new UrlMapping(indexFileName, project, this.theme.projectTemplate),
      );
    } else {
      project.url = entryFileName;
      this.urls.push(
        new UrlMapping(entryFileName, project, this.theme.projectTemplate),
      );
    }

    if (
      this.options.entryPointStrategy === EntryPointStrategy.Packages &&
      !Boolean(project.groups)
    ) {
      project.children?.forEach((projectChild) => {
        const url = `${projectChild.name}/${
          Boolean(projectChild.readme) ? indexFileName : entryFileName
        }`;
        if (projectChild.readme) {
          this.urls.push(
            new UrlMapping(
              `${path.dirname(url)}/${entryFileName}`,
              projectChild as any,
              this.theme.readmeTemplate,
            ),
          );
        }
        this.urls.push(
          new UrlMapping(url, projectChild as any, this.theme.projectTemplate),
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
    project.groups?.forEach((projectGroup) => {
      projectGroup.children?.forEach((projectGroupChild) => {
        this.buildUrlsFromGroup(projectGroupChild, {
          ...(parentUrl && { parentUrl: parentUrl }),
        });
      });
    });
  }

  private buildUrlsFromGroup(
    reflection: DeclarationReflection,
    options: UrlOption,
  ) {
    const mapping = this.theme.getTemplateMapping(reflection.kind);

    if (mapping) {
      const directory = options.directory || mapping.directory;
      const url = this.getUrl(reflection, {
        ...options,
        directory,
      });

      this.urls.push(new UrlMapping(url, reflection, mapping.template));

      reflection.url = url;
      reflection.hasOwnDocument = true;

      reflection.groups?.forEach((group) => {
        group.children.forEach((groupChild) => {
          const mapping = this.theme.getTemplateMapping(groupChild.kind);
          this.buildUrlsFromGroup(groupChild, {
            parentUrl: url,
            directory: mapping?.directory || null,
          });
        });
      });
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
  }

  getUrl(reflection: DeclarationReflection, options: UrlOption) {
    const alias = reflection.name.replace(/^_+/, '');

    const parentDir = options.parentUrl
      ? path.dirname(options.parentUrl)
      : null;

    const dir = () => {
      if (reflection.kind === ReflectionKind.Namespace) {
        return `${options.directory}/${alias}`;
      }

      if (reflection.kind === ReflectionKind.Module) {
        if (path.parse(this.options.entryFileName as string).name === alias) {
          return `module.${alias}`;
        }
        return alias;
      }

      return options.directory
        ? options.directory
        : `${slugify(ReflectionKind.singularString(reflection.kind))}.${alias}`;
    };

    const filename = () => {
      if (
        [ReflectionKind.Module, ReflectionKind.Namespace].includes(
          reflection.kind,
        ) &&
        this.options.outputFileStrategy === OutputFileStrategy.Modules &&
        !this.childrenIncludeNamespaces(reflection)
      ) {
        return null;
      }
      if (
        [ReflectionKind.Module, ReflectionKind.Namespace].includes(
          reflection.kind,
        )
      ) {
        return path.parse(this.options.entryFileName as string).name;
      }

      return alias;
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
    if (container.url) {
      if (!reflection.kindOf(ReflectionKind.TypeLiteral)) {
        const anchorPrefix = this.options.anchorPrefix;
        const anchorId = this.getAnchorId(reflection);

        if (anchorId) {
          if (!this.anchors[container.url]) {
            this.anchors[container.url] = [];
          }

          this.anchors[container.url].push(anchorId);

          const count = this.anchors[container.url]?.filter(
            (id) => id === anchorId,
          )?.length;

          const anchorParts = [anchorId];

          if (count > 1) {
            anchorParts.push(`-${count - 1}`);
          }

          if (anchorPrefix) {
            anchorParts.unshift(`${anchorPrefix}`);
          }

          reflection.url = container.url + '#' + anchorParts.join('');
          reflection.anchor = anchorParts.join('');
        }
      }
      reflection.hasOwnDocument = false;
    }
    if (reflection.parent) {
      reflection.traverse((child) => {
        if (child instanceof DeclarationReflection) {
          this.applyAnchorUrl(child, container);
        }
      });
    }
  }

  private getAnchorId(reflection: DeclarationReflection) {
    const preserveAnchorCasing = this.options.preserveAnchorCasing;

    const anchorName = this.getAnchorName(reflection);

    if (anchorName) {
      return preserveAnchorCasing ? anchorName : anchorName.toLowerCase();
    }

    return null;
  }

  private getAnchorName(reflection: DeclarationReflection) {
    const htmlTableAnchors =
      this.options.namedAnchors && this.options.namedAnchors['tableRows'];

    if (!htmlTableAnchors) {
      if (
        (reflection.kindOf(ReflectionKind.Property) &&
          this.options.propertiesFormat === 'table') ||
        (reflection.kindOf(ReflectionKind.EnumMember) &&
          this.options.enumMembersFormat === 'table')
      ) {
        return null;
      }
    }
    if (reflection.kindOf(ReflectionKind.Constructor)) {
      return 'Constructors';
    }
    return slugify(getMemberTitle(reflection));
  }

  private childrenIncludeNamespaces(reflection: DeclarationReflection) {
    return reflection.children?.some(
      (child) => child.kind === ReflectionKind.Namespace,
    );
  }
}
