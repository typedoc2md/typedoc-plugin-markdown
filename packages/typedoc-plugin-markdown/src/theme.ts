import * as prettier from 'prettier';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  RenderTemplate,
  Renderer,
  Theme,
  UrlMapping,
} from 'typedoc';
import { TemplateMapping } from './models';
import { URL_PREFIX } from './support/constants';
import { MarkdownThemeRenderContext } from './theme-context';
export class MarkdownTheme extends Theme {
  @BindOption('entryDocument') entryDocument!: string;
  @BindOption('entryPoints') entryPoints!: string[];
  @BindOption('flattenOutputFiles') flattenOutputFiles!: string;
  @BindOption('groupByReflections') groupByReflections!: string[];
  @BindOption('preserveAnchorCasing') preserveAnchorCasing!: boolean;
  @BindOption('readme') readme!: string;
  @BindOption('reflectionsWithOwnFile') reflectionsWithOwnFile!:
    | string
    | string[];

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
      project.url = this.getRenderContext().globalsFile;
      urls.push(
        new UrlMapping(
          this.getRenderContext().globalsFile,
          project,
          this.projectTemplate,
        ),
      );
      urls.push(
        new UrlMapping(this.entryDocument, project, this.readmeTemplate),
      );
    }

    project.children?.forEach((child) => {
      this.buildUrls(child, urls);
    });

    return urls;
  }

  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[],
  ): UrlMapping[] {
    const mapping = this.mappings[reflection.kind];

    if (mapping) {
      const url = this.getUrl(reflection, mapping);
      urls.push(new UrlMapping(url, reflection, mapping.template));
      reflection.url = url;
      reflection.hasOwnDocument = true;
      for (const child of reflection.children || []) {
        if (mapping.isLeaf) {
          this.applyAnchorUrl(child, reflection);
        } else {
          this.buildUrls(child, urls);
        }
      }
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
    return urls;
  }

  getUrl(reflection: DeclarationReflection, mapping: TemplateMapping) {
    const alias = reflection.getFriendlyFullName().replace(/\//g, '_');

    if (this.flattenOutputFiles) {
      return alias + '.md';
    }

    const parts = alias.split('.');

    const includesNamespace = reflection.children?.some((child) =>
      child.kindOf(ReflectionKind.Namespace),
    );

    const isModuleOrNamespace = reflection.kindOf([
      ReflectionKind.Module,
      ReflectionKind.Namespace,
    ]);

    const namespaces: string[] = this.getNamespaces(reflection);

    if (mapping.directory && !isModuleOrNamespace && this.groupByReflections) {
      parts.splice(parts.length - 1, 0, mapping.directory);
    }

    if (
      (this.reflectionsWithOwnFile[0] !== 'none' && isModuleOrNamespace) ||
      includesNamespace
    ) {
      parts.push(parts[parts.length - 1]);
    }

    if (namespaces.length > 0) {
      namespaces.forEach((namespaceName) => {
        const namespaceIndex = parts.findIndex(
          (part) => part === namespaceName,
        );
        if (namespaceIndex > 0) {
          parts.splice(
            namespaceIndex,
            0,
            this.mappings[ReflectionKind.Namespace].directory as string,
          );
        }
      });

      if (reflection.kindOf(ReflectionKind.Namespace))
        parts[parts.length - 1] = `${ReflectionKind.singularString(
          ReflectionKind.Namespace,
        ).toLowerCase()}.${parts[parts.length - 1]}`;
    }

    if (!isModuleOrNamespace) {
      parts[parts.length - 1] = `${ReflectionKind.singularString(
        reflection.kind,
      ).toLowerCase()}.${parts[parts.length - 1]}`;
    }

    return parts.join(this.flattenOutputFiles ? '.' : '/') + '.md';
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
      reflection.hasOwnDocument = false;
    }
    reflection.traverse((child) => {
      if (child instanceof DeclarationReflection) {
        this.applyAnchorUrl(child, container);
      }
    });
  }

  get mappings(): Record<number, TemplateMapping> {
    const isAll = this.reflectionsWithOwnFile.includes('all');

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

    if (isAll || this.reflectionsWithOwnFile.includes('class')) {
      mappings[ReflectionKind.Class] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'classes',
        kind: ReflectionKind.Class,
      };
    }
    if (isAll || this.reflectionsWithOwnFile.includes('interface')) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'interfaces',
        kind: ReflectionKind.Interface,
      };
    }
    if (isAll || this.reflectionsWithOwnFile.includes('enum')) {
      mappings[ReflectionKind.Enum] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'enums',
        kind: ReflectionKind.Enum,
      };
    }
    if (isAll || this.reflectionsWithOwnFile.includes('function')) {
      mappings[ReflectionKind.Function] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'functions',
        kind: ReflectionKind.Function,
      };
    }
    if (isAll || this.reflectionsWithOwnFile.includes('type')) {
      mappings[ReflectionKind.TypeAlias] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'types',
        kind: ReflectionKind.TypeAlias,
      };
    }
    if (isAll || this.reflectionsWithOwnFile.includes('var')) {
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
