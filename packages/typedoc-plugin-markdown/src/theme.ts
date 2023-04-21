import * as prettier from 'prettier';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionGroup,
  ReflectionKind,
  RenderTemplate,
  Renderer,
  Theme,
  UrlMapping,
} from 'typedoc';
import { TemplateMapping } from './models';
import { URL_PREFIX } from './support/constants';
import { slugify } from './support/utils';
import { MarkdownThemeRenderContext } from './theme-context';
export class MarkdownTheme extends Theme {
  @BindOption('entryDocument') entryDocument!: string;
  @BindOption('entryPoints') entryPoints!: string[];
  @BindOption('flattenOutput') flattenOutput!: string;
  @BindOption('groupByKinds') groupByKinds!: string[];
  @BindOption('kindsWithOwnFile') kindsWithOwnFile!: string | string[];
  @BindOption('numberPrefixOutput') numberPrefixOutput!: string;
  @BindOption('preserveAnchorCasing') preserveAnchorCasing!: boolean;
  @BindOption('readme') readme!: string;

  private _renderContext?: MarkdownThemeRenderContext;

  private anchors: Record<string, string[]>;

  constructor(renderer: Renderer) {
    super(renderer);

    this.anchors = {};

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onBeginPage,
    });
  }

  getRenderContext() {
    if (!this._renderContext) {
      this._renderContext = new MarkdownThemeRenderContext(
        this,
        this.application.options,
      );
    }
    return this._renderContext;
  }

  readmeTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.getRenderContext().templates.readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.getRenderContext().templates.projectTemplate(pageEvent);
  };

  reflectionTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.getRenderContext().templates.reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.getRenderContext().templates.memberTemplate(pageEvent);
  };

  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string {
    return prettier.format(template(page) as string, {
      parser: 'markdown',
    });
  }

  getUrls(project: ProjectReflection) {
    const urls: UrlMapping[] = [];
    const noReadmeFile = this.readme.endsWith('none');
    if (noReadmeFile) {
      project.url = this.entryDocument;
      urls.push(
        new UrlMapping(this.entryDocument, project, this.projectTemplate),
      );
    } else {
      project.url = this.getRenderContext().modulesFile;
      urls.push(
        new UrlMapping(this.entryDocument, project, this.readmeTemplate),
      );
      urls.push(
        new UrlMapping(
          `${this.numberPrefixOutput ? '01-' : ''}${
            this.getRenderContext().modulesFile
          }`,
          project,
          this.projectTemplate,
        ),
      );
    }

    project.groups?.forEach((projectGroup, groupIndex) => {
      projectGroup.children.forEach((child) => {
        const index = noReadmeFile ? groupIndex : groupIndex + 1;
        this.buildUrls(child, urls, index, projectGroup);
      });
    });

    return urls;
  }

  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[],
    index: number,
    reflectionGroup: ReflectionGroup,
  ): UrlMapping[] {
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
            urls.findIndex(
              (urlMapping) => urlMapping.url === groupDirectory,
            ) === -1 &&
            groupDirectory.endsWith(mapping.directory)
          ) {
            urls.push(
              new UrlMapping(groupDirectory, reflectionGroup, () => ''),
            );
          }
        }
      }
      urls.push(new UrlMapping(url, reflection, mapping.template));
      reflection.url = url;
      reflection.hasOwnDocument = true;
      reflection.groups?.forEach((reflectionGroup, groupIndex) => {
        reflectionGroup.children.forEach((child) => {
          if (mapping.isLeaf) {
            this.applyAnchorUrl(child, reflection);
          } else {
            this.buildUrls(child, urls, groupIndex, reflectionGroup);
          }
        });
      });
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
    return urls;
  }

  getUrl(
    reflection: DeclarationReflection,
    mapping: TemplateMapping,
    index: number,
  ) {
    const alias = reflection.getFriendlyFullName().replace(/\//g, '_');

    if (this.flattenOutput) {
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

    if (mapping.directory && !isModuleOrNamespace && this.groupByKinds) {
      parts.splice(
        parts.length - 1,
        0,
        `${this.numberPrefixOutput ? `0${index + 1}-` : ''}${
          mapping.directory
        }`,
      );
    }

    if (
      (this.kindsWithOwnFile[0].toLowerCase() !== 'none' &&
        isModuleOrNamespace) ||
      childrenIncludeNamespaces
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
          `${this.numberPrefixOutput ? '01-' : ''}${
            this.mappings[ReflectionKind.Namespace].directory
          }` as string,
        );
      });
    }

    parts[parts.length - 1] = `${this.getAliasPrefix(reflection.kind)}.${
      parts[parts.length - 1]
    }`;

    if (parts.length > 1 && this.entryPoints?.length > 1) {
      parts[0] = `${this.getAliasPrefix(ReflectionKind.Module)}.${parts[0]}`;
    }

    return parts.join('/') + '.md';
  }

  childrenIncludeNamespaces(reflection: DeclarationReflection) {
    return reflection.children?.some((child) =>
      child.kindOf(ReflectionKind.Namespace),
    );
  }

  getAliasPrefix(reflectionKind: ReflectionKind) {
    return slugify(ReflectionKind.singularString(reflectionKind));
  }

  getNamespaces(reflection: DeclarationReflection, namespaces: string[] = []) {
    if (reflection?.kindOf(ReflectionKind.Namespace)) {
      namespaces.push(reflection.name);
    }
    if (reflection.parent?.kindOf(ReflectionKind.Namespace)) {
      this.getNamespaces(reflection?.parent as any, namespaces);
    }
    return namespaces;
  }

  applyAnchorUrl(
    reflection: Reflection,
    container: Reflection,
    isSymbol = false,
  ) {
    if (
      container.url &&
      (!reflection.url || !URL_PREFIX.test(reflection.url))
    ) {
      if (!reflection.kindOf(ReflectionKind.TypeLiteral)) {
        const reflectionId = this.preserveAnchorCasing
          ? reflection.name
          : reflection.name.toLowerCase();

        if (isSymbol) {
          this.anchors[container.url]
            ? this.anchors[container.url].push(reflectionId)
            : (this.anchors[container.url] = [reflectionId]);
        }

        const count = this.anchors[container.url]?.filter(
          (id) => id === reflectionId,
        )?.length;

        const anchor =
          reflectionId + (count > 1 ? '-' + (count - 1).toString() : '');

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

  get mappings(): Record<number, TemplateMapping> {
    const kindsWithOwnFile: string[] = Array.isArray(this.kindsWithOwnFile)
      ? this.kindsWithOwnFile.map((val) => val.toLowerCase())
      : [this.kindsWithOwnFile.toLowerCase()];

    const isAll = kindsWithOwnFile.includes('all');

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
        directory: 'namespaces',
        kind: ReflectionKind.Namespace,
      },
    };

    if (isAll || kindsWithOwnFile.includes('class')) {
      mappings[ReflectionKind.Class] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'classes',
        kind: ReflectionKind.Class,
      };
    }
    if (isAll || kindsWithOwnFile.includes('interface')) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'interfaces',
        kind: ReflectionKind.Interface,
      };
    }
    if (isAll || kindsWithOwnFile.includes('enum')) {
      mappings[ReflectionKind.Enum] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'enums',
        kind: ReflectionKind.Enum,
      };
    }
    if (isAll || kindsWithOwnFile.includes('function')) {
      mappings[ReflectionKind.Function] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'functions',
        kind: ReflectionKind.Function,
      };
    }
    if (isAll || kindsWithOwnFile.includes('typealias')) {
      mappings[ReflectionKind.TypeAlias] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'types',
        kind: ReflectionKind.TypeAlias,
      };
    }
    if (isAll || kindsWithOwnFile.includes('variable')) {
      mappings[ReflectionKind.Variable] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'variables',
        kind: ReflectionKind.Variable,
      };
    }
    return mappings;
  }

  protected onBeginPage(page: PageEvent) {
    this.getRenderContext().activeLocation = page.url;
  }
}
