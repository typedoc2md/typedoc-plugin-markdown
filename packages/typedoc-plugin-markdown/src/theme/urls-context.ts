import * as path from 'path';
import {
  DeclarationReflection,
  EntryPointStrategy,
  Options,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Renderer,
} from 'typedoc';
import { OutputFileStrategy } from '../plugin/options/custom-maps';
import { UrlMapping } from '../plugin/url-mapping';
import { slugify } from '../support/utils';
import { getIndexFileName, getMemberTitle } from './helpers';
import { UrlOption } from './models';
import { MarkdownTheme } from './theme';

export class UrlsContext {
  urls: UrlMapping[] = [];
  anchors: Record<string, string[]> = {};

  constructor(
    public theme: MarkdownTheme,
    public project: ProjectReflection,
    public renderer: Renderer,
    public options: Options,
  ) {}

  /**
   * Map the models of the given project to the desired output files.
   * Based on TypeDoc DefaultTheme.getUrls()
   *
   * @param project  The project whose urls should be generated.
   */
  getUrls(): UrlMapping[] {
    const preserveReadme =
      Boolean(this.project.readme) && !this.options.getValue('mergeReadme');

    const preserveModulesPage =
      (this.project?.groups &&
        Boolean(
          this.project?.groups[0]?.children.find(
            (child) => child.name === this.options.getValue('entryModule'),
          ),
        )) ||
      false;

    const isPackages =
      this.options.getValue('entryPointStrategy') ===
      EntryPointStrategy.Packages;

    const entryFileName = this.options.getValue('entryFileName');

    const indexFilename = getIndexFileName(this.project, isPackages);

    this.project.url = preserveReadme
      ? indexFilename
      : preserveModulesPage
        ? indexFilename
        : this.options.getValue('entryFileName');

    if (preserveReadme) {
      this.urls.push(
        new UrlMapping(
          preserveModulesPage ? 'readme_.md' : entryFileName,
          this.project,
          this.theme.readmeTemplate,
        ),
      );

      this.urls.push(
        new UrlMapping(indexFilename, this.project, this.theme.projectTemplate),
      );
    } else {
      this.urls.push(
        new UrlMapping(
          preserveModulesPage ? indexFilename : entryFileName,
          this.project,
          this.theme.projectTemplate,
        ),
      );
    }

    if (isPackages) {
      this.project.children?.forEach((projectChild) => {
        const preservePackageReadme =
          Boolean(projectChild.readme) && !this.options.getValue('mergeReadme');

        const packagesIndex = getIndexFileName(projectChild);
        const packageMeta = (this.renderer as any).packages[projectChild.name];

        const outputFileStrategy =
          packageMeta.outputFileStrategy ||
          this.options.getValue('outputFileStrategy');

        const url = `${projectChild.name}/${
          preservePackageReadme ? packagesIndex : entryFileName
        }`;

        if (preservePackageReadme) {
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

        this.buildUrlsFromProject(projectChild, url, outputFileStrategy);
      });
    } else {
      this.buildUrlsFromProject(this.project);
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
    outputFileStrategy?: OutputFileStrategy,
  ) {
    project.groups?.forEach((projectGroup) => {
      projectGroup.children?.forEach((projectGroupChild) => {
        this.buildUrlsFromGroup(projectGroupChild, {
          ...(parentUrl && { parentUrl }),
          ...(outputFileStrategy && { outputFileStrategy }),
        });
      });
    });
  }

  private buildUrlsFromGroup(
    reflection: DeclarationReflection,
    options: UrlOption,
  ) {
    const mapping = this.theme.getTemplateMapping(
      reflection.kind,
      options.outputFileStrategy,
    );

    if (mapping) {
      const directory = options.directory || mapping.directory;
      const urlPath = this.getUrlPath(reflection, {
        ...options,
        directory,
      });

      const url = this.getUrl(reflection, urlPath);

      this.urls.push(new UrlMapping(url, reflection, mapping.template));
      reflection.url = url;
      reflection.hasOwnDocument = true;

      reflection.groups?.forEach((group) => {
        group.children.forEach((groupChild) => {
          const mapping = this.theme.getTemplateMapping(
            groupChild.kind,
            options.outputFileStrategy,
          );
          this.buildUrlsFromGroup(groupChild, {
            parentUrl: urlPath,
            directory: mapping?.directory || null,
            outputFileStrategy: options.outputFileStrategy,
          });
        });
      });
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
  }

  getUrl(reflection: DeclarationReflection, urlPath: string) {
    if (reflection.name === this.options.getValue('entryModule')) {
      return this.options.getValue('entryFileName');
    }
    if (
      this.options.getValue('outputFileStrategy') ===
        OutputFileStrategy.Modules &&
      reflection.name === 'index'
    ) {
      return `module.index.md`;
    }
    return urlPath;
  }

  getUrlPath(reflection: DeclarationReflection, options: UrlOption) {
    const alias = reflection.name
      .replace(/^_+/, '')
      .replace(/</, '-')
      .replace(/>/, '-');

    const parentDir = options.parentUrl
      ? path.dirname(options.parentUrl)
      : null;

    const dir = () => {
      if (reflection.kind === ReflectionKind.Namespace) {
        return `${options.directory}/${alias}`;
      }

      if (reflection.kind === ReflectionKind.Module) {
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
        this.options.getValue('outputFileStrategy') ===
          OutputFileStrategy.Modules &&
        !this.childrenIncludeNamespaces(reflection)
      ) {
        return null;
      }
      if (
        [ReflectionKind.Module, ReflectionKind.Namespace].includes(
          reflection.kind,
        )
      ) {
        return path.parse(this.options.getValue('entryFileName')).name;
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
        const anchorPrefix = this.options.getValue('anchorPrefix');
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
    const preserveAnchorCasing = this.options.getValue('preserveAnchorCasing');

    const anchorName = this.getAnchorName(reflection);

    if (anchorName) {
      return preserveAnchorCasing ? anchorName : anchorName.toLowerCase();
    }

    return null;
  }

  private getAnchorName(reflection: DeclarationReflection) {
    const htmlTableAnchors =
      this.options.getValue('namedAnchors') &&
      this.options.getValue('namedAnchors')['tableRows'];

    if (!htmlTableAnchors) {
      if (
        (reflection.kindOf(ReflectionKind.Property) &&
          this.options.getValue('propertiesFormat') === 'table') ||
        (reflection.kindOf(ReflectionKind.EnumMember) &&
          this.options.getValue('enumMembersFormat') === 'table')
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
