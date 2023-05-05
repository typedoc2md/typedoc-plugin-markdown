import * as path from 'path';
import {
  DeclarationReflection,
  Options,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionGroup,
  ReflectionKind,
  UrlMapping,
} from 'typedoc';
import {
  NavigationItem,
  TemplateMapping,
  TypedocPluginMarkdownOptions,
} from './models';
import { slugify } from './support/utils';
import { MarkdownTheme } from './theme';

export class MarkdownThemeConverterContext {
  private _urls: UrlMapping[];
  private _anchors: Record<string, string[]> = {};

  constructor(public theme: MarkdownTheme, public options: Options) {}

  getOption<K extends keyof TypedocPluginMarkdownOptions>(name: K) {
    return this.options.getValue(name) as TypedocPluginMarkdownOptions[K];
  }

  readmeTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.theme.getRenderContext().templates.readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.theme.getRenderContext().templates.projectTemplate(pageEvent);
  };

  reflectionTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.theme
      .getRenderContext()
      .templates.reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.theme.getRenderContext().templates.memberTemplate(pageEvent);
  };

  getUrls(project: ProjectReflection): UrlMapping[] {
    if (!this._urls) {
      const readme = this.getOption('readme') as string;
      const entryDocument = this.getOption('entryDocument') as string;
      const noReadmeFile = readme.endsWith('none');
      this._urls = [];

      if (noReadmeFile) {
        project.url = entryDocument;
        this._urls.push(
          new UrlMapping(entryDocument, project, this.projectTemplate),
        );
      } else {
        const modulesFile = `${
          this.getOption('numberPrefixOutput') ? '01-' : ''
        }${'modules.md'}`;

        project.url = modulesFile;
        this._urls.push(
          new UrlMapping(entryDocument, project, this.readmeTemplate),
        );
        this._urls.push(
          new UrlMapping(modulesFile, project, this.projectTemplate),
        );
      }

      // if the project does not contain groups we assume it is a monorepo
      if (project.groups) {
        this.buildProject(project);
      } else {
        project.children?.forEach((projectChild) => {
          this.buildProject(projectChild, true);
        });
      }
    }
    this._urls.forEach((url) => {
      if (url.model.name === 'child-package') {
        console.log(url.model);
      }
    });
    return this._urls;
  }

  getNavigation(project: ProjectReflection) {
    const urls = this.getUrls(project);

    const navigation: NavigationItem[] = [];

    const onlyModules = project.children?.every((child) =>
      child.kindOf(ReflectionKind.Module),
    );

    if (onlyModules) {
      urls
        .filter(
          (urlMapping) =>
            urlMapping.model?.kindOf &&
            urlMapping.model.kindOf(ReflectionKind.Module),
        )
        .forEach((urlMapping) => {
          const children = this.getNavigationGroups(urls, urlMapping.url);
          const isReadme = urlMapping.template === this.readmeTemplate;
          const hasReadme = Boolean(urlMapping.model.readme);
          if (hasReadme) {
            if (!isReadme) {
              navigation.push({
                title: urlMapping.model?.name,
                url: `${path.dirname(urlMapping.url)}/${this.getOption(
                  'entryDocument',
                )}`,
                children: [
                  {
                    title: 'Index',
                    url: urlMapping.url,
                  },
                  ...children,
                ],
              });
            }
          } else {
            navigation.push({
              title: urlMapping.model?.name,
              url: urlMapping.url,
              ...(children?.length && { children }),
            });
          }
        });
    } else {
      this.getNavigationGroups(urls).forEach((group) => {
        navigation.push(group);
      });
    }

    return navigation;
  }

  private buildProject(
    project: ProjectReflection | DeclarationReflection,
    isPackage = false,
  ) {
    const readme = this.getOption('readme') as string;
    const noReadmeFile = readme.endsWith('none');
    const entryDocument = this.getOption('entryDocument') as string;

    if (isPackage) {
      const mapping = this.mappings[project.kind];
      if (mapping) {
        let url = this.getUrl(project as DeclarationReflection, mapping, 0);
        if (project.readme) {
          this._urls.push(
            new UrlMapping(
              `${path.dirname(url)}/${entryDocument}`,
              project,
              this.readmeTemplate,
            ),
          );
        } else {
          url = `${path.dirname(url)}/${entryDocument}`;
        }
        this._urls.push(new UrlMapping(url, project, mapping.template));
        project.url = url;
      }
    }

    project.groups?.forEach((projectGroup, groupIndex) => {
      projectGroup.children.forEach((child) => {
        const index = noReadmeFile ? groupIndex : groupIndex + 1;
        this.buildUrls(child, index, projectGroup);
      });
    });
  }

  private buildUrls(
    reflection: DeclarationReflection,
    index: number,
    reflectionGroup: ReflectionGroup,
  ) {
    const mapping = this.mappings[reflection.kind];
    if (mapping) {
      const url = this.getUrl(reflection, mapping, index);
      if (mapping.directory) {
        if (!reflection.kindOf(ReflectionKind.Module)) {
          const sliceLength = reflection.kindOf(ReflectionKind.Namespace)
            ? -2
            : -1;
          const groupDirectory = url.split('/').slice(0, sliceLength).join('/');
          if (
            this._urls.findIndex(
              (urlMapping) => urlMapping.url === groupDirectory,
            ) === -1 &&
            groupDirectory.endsWith(mapping.directory)
          ) {
            this._urls.push(
              new UrlMapping(groupDirectory, reflectionGroup, () => ''),
            );
          }
        }
      }
      this._urls.push(new UrlMapping(url, reflection, mapping.template));
      reflection.url = url;
      reflection.hasOwnDocument = true;
      reflection.groups?.forEach((reflectionGroup, groupIndex) => {
        reflectionGroup.children.forEach((child) => {
          if (mapping.isLeaf) {
            this.applyAnchorUrl(child, reflection);
          } else {
            this.buildUrls(child, groupIndex, reflectionGroup);
          }
        });
      });
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
  }

  private getUrl(
    reflection: DeclarationReflection,
    mapping: TemplateMapping,
    index: number,
  ) {
    const alias = reflection.getFriendlyFullName().replace(/\//g, '_');

    if (this.getOption('flattenOutputFiles')) {
      return alias + '.md';
    }

    const childrenIncludeNamespaces =
      this.childrenIncludeNamespaces(reflection);

    const isModuleOrNamespace = reflection.kindOf([
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ]);

    const parts = alias.split('.');

    const namespaces: string[] = this.getNamespaces(reflection);

    if (
      mapping.directory &&
      !isModuleOrNamespace &&
      this.options.getValue('groupByKinds')
    ) {
      parts.splice(
        parts.length - 1,
        0,
        `${this.getOption('numberPrefixOutput') ? `0${index + 1}-` : ''}${
          mapping.directory || parts[0]
        }`,
      );
    }

    if (
      (this.getOption('kindsWithOwnFile')[0].toLowerCase() !== 'none' &&
        isModuleOrNamespace) ||
      childrenIncludeNamespaces ||
      Boolean(reflection.readme)
    ) {
      parts.push(`${parts[parts.length - 1]}`);
    }

    if (namespaces.length > 0) {
      namespaces.forEach((namespaceName) => {
        const namespaceIndex = parts.findIndex(
          (part) => part === namespaceName,
        );

        parts[namespaceIndex] = `${this.getAliasPrefix(
          ReflectionKind.Namespace,
        )}.${parts[namespaceIndex]}`;

        parts.splice(
          namespaceIndex,
          0,
          `${this.getOption('numberPrefixOutput') ? '01-' : ''}${
            this.mappings[ReflectionKind.Namespace].directory
          }` as string,
        );
      });
    }

    parts[parts.length - 1] = `${this.getAliasPrefix(reflection.kind)}.${
      parts[parts.length - 1]
    }`;

    if (parts.length > 1 && this.getOption('entryPoints')?.length > 1) {
      parts[0] = `${this.getAliasPrefix(ReflectionKind.Module)}.${parts[0]}`;
    }

    return parts.join('/') + '.md';
  }

  private childrenIncludeNamespaces(reflection: DeclarationReflection) {
    return reflection.children?.some((child) =>
      child.kindOf(ReflectionKind.Namespace),
    );
  }

  private getAliasPrefix(reflectionKind: ReflectionKind) {
    return slugify(ReflectionKind.singularString(reflectionKind));
  }

  private getNamespaces(
    reflection: DeclarationReflection,
    namespaces: string[] = [],
  ) {
    if (reflection?.kindOf(ReflectionKind.Namespace)) {
      namespaces.push(reflection.name);
    }
    if (reflection.parent?.kindOf(ReflectionKind.Namespace)) {
      this.getNamespaces(reflection?.parent as any, namespaces);
    }
    return namespaces;
  }

  private applyAnchorUrl(
    reflection: DeclarationReflection,
    container: Reflection,
  ) {
    if (container.url && !reflection.url) {
      if (!reflection.kindOf(ReflectionKind.TypeLiteral)) {
        const anchorId = this.getAnchorId(reflection);

        const count = this._anchors[container.url]?.filter(
          (id) => id === anchorId,
        )?.length;

        const anchor =
          anchorId + (count > 1 ? '-' + (count - 1).toString() : '');

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
    const anchorFormat = this.getOption('anchorFormat');
    if (anchorFormat.toLowerCase() === 'lowercase') {
      return reflection.name.toLowerCase();
    }
    if (anchorFormat.toLowerCase() === 'slug') {
      return slugify(reflection.name);
    }
    return reflection.name;
  }

  private getNavigationGroups(urls: UrlMapping[], url = '') {
    const groups = urls?.filter((urlMapping) => {
      const baseParts = url?.split('/').slice(0, -1);
      const urlParts = urlMapping.url.split('/');
      return (
        urlMapping.model instanceof ReflectionGroup &&
        urlParts?.length === baseParts.length + 1 &&
        urlMapping.url.startsWith(baseParts.join('/')) &&
        baseParts[0] === urlParts[0]
      );
    });

    return groups?.map((group) => ({
      title: group.model?.title,
      children: group?.model.children.map((child) => {
        const children = this.getNavigationGroups(urls, child.url as string);
        return {
          title: child.name,
          url: child.url || null,
          ...(children?.length && { children }),
        };
      }),
    }));
  }

  get mappings(): Record<number, TemplateMapping> {
    const numberPrefixOutput = this.options.getValue(
      'numberPrefixOutput',
    ) as boolean;
    const kindsWithOwnFileOption = this.options.getValue('kindsWithOwnFile') as
      | string
      | string[];
    const kindsWithOwnFile: string[] = Array.isArray(kindsWithOwnFileOption)
      ? kindsWithOwnFileOption.map((val) => val.toLowerCase())
      : [kindsWithOwnFileOption.toLowerCase()];

    const isAll = kindsWithOwnFile.includes('all');

    const getDirectoryName = (reflectionKind: ReflectionKind) => {
      const pluralString = ReflectionKind.pluralString(reflectionKind);
      return numberPrefixOutput ? pluralString : slugify(pluralString);
    };

    const mappings = {
      [ReflectionKind.Module]: {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: null,
        kind: ReflectionKind.Module,
      },
      [ReflectionKind.Namespace]: {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Namespace),
        kind: ReflectionKind.Namespace,
      },
    };

    if (isAll || kindsWithOwnFile.includes('class')) {
      mappings[ReflectionKind.Class] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Class),
        kind: ReflectionKind.Class,
      };
    }
    if (isAll || kindsWithOwnFile.includes('interface')) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Interface),
        kind: ReflectionKind.Interface,
      };
    }
    if (isAll || kindsWithOwnFile.includes('enum')) {
      mappings[ReflectionKind.Enum] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: getDirectoryName(ReflectionKind.Enum),
        kind: ReflectionKind.Enum,
      };
    }
    if (isAll || kindsWithOwnFile.includes('function')) {
      mappings[ReflectionKind.Function] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Function),
        kind: ReflectionKind.Function,
      };
    }
    if (isAll || kindsWithOwnFile.includes('typealias')) {
      mappings[ReflectionKind.TypeAlias] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.TypeAlias),
        kind: ReflectionKind.TypeAlias,
      };
    }
    if (isAll || kindsWithOwnFile.includes('variable')) {
      mappings[ReflectionKind.Variable] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: getDirectoryName(ReflectionKind.Variable),
        kind: ReflectionKind.Variable,
      };
    }
    return mappings;
  }
}
