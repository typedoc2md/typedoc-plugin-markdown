import * as path from 'path';
import {
  BindOption,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Renderer,
  Theme,
  UrlMapping,
} from 'typedoc';
import { HasOwnDocument, TemplateMapping } from './models';
import { URL_PREFIX } from './support/constants';
import { formatContents } from './support/utils';
import { MarkdownThemeRenderContext } from './theme-context';
export class MarkdownTheme extends Theme {
  @BindOption('entryDocument') entryDocument!: string;
  @BindOption('entryPoints') entryPoints!: string[];
  @BindOption('readme') readme!: string;
  @BindOption('preserveAnchorCasing') preserveAnchorCasing!: boolean;
  @BindOption('hasOwnDocument') hasOwnDocument!: HasOwnDocument;

  private _renderContext?: MarkdownThemeRenderContext;

  private mappings: Record<number, TemplateMapping>;

  private anchors: Record<string, string[]>;

  constructor(renderer: Renderer) {
    super(renderer);

    this.mappings = this.getMappingsMap(this.hasOwnDocument);
    this.anchors = {};

    this.listenTo(this.owner, {
      [PageEvent.BEGIN]: this.onBeginPage,
    });
  }

  getRenderContext() {
    if (!this._renderContext) {
      this._renderContext = new MarkdownThemeRenderContext(
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

  render(page: PageEvent<Reflection>): string {
    return formatContents(page.template(page) as string);
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

    project.children?.forEach((child: Reflection) => {
      if (child instanceof DeclarationReflection) {
        this.buildUrls(child, urls);
      }
    });

    return urls;
  }

  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[],
    parentFragment?: string,
  ): UrlMapping[] {
    const mapping = this.mappings[reflection.kind];

    if (mapping) {
      const fragment = mapping.directory
        ? `${mapping.directory}/${reflection.getAlias()}`
        : reflection.getAlias();

      if (!reflection.url || !URL_PREFIX.test(reflection.url)) {
        const fragments = [fragment];

        if (parentFragment) {
          fragments.unshift(parentFragment);
        }

        const friendlyFragments = reflection.getFriendlyFullName().split('.');

        friendlyFragments.splice(
          friendlyFragments.length - 1,
          0,
          ...(mapping.directory ? [mapping.directory] : []),
        );

        if (
          reflection.groups?.some((group) =>
            group.children.some((child) => Boolean(this.mappings[child.kind])),
          )
        ) {
          friendlyFragments.push(path.parse(this.entryDocument).name);
        }

        const url = friendlyFragments.join('/') + '.md';
        urls.push(new UrlMapping(url, reflection, mapping.template));
        reflection.url = url;
        reflection.hasOwnDocument = true;
      }

      for (const child of reflection.children || []) {
        if (mapping.isLeaf) {
          this.applyAnchorUrl(child, reflection);
        } else {
          this.buildUrls(child, urls, fragment);
        }
      }
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent /*true*/);
    }
    return urls;
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

  getMappingsMap(
    hasOwnDocument: HasOwnDocument,
  ): Record<number, TemplateMapping> {
    const mappings = {
      [ReflectionKind.Module]: {
        isLeaf: false,
        template: this.reflectionTemplate,
      },
      [ReflectionKind.Namespace]: {
        isLeaf: false,
        template: this.reflectionTemplate,
      },
    };
    if (hasOwnDocument.includes('all') || hasOwnDocument.includes('class')) {
      mappings[ReflectionKind.Class] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'Classes',
      };
    }
    if (
      hasOwnDocument.includes('all') ||
      hasOwnDocument.includes('interface')
    ) {
      mappings[ReflectionKind.Interface] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'Interfaces',
      };
    }
    if (hasOwnDocument.includes('all') || hasOwnDocument.includes('enum')) {
      mappings[ReflectionKind.Enum] = {
        isLeaf: false,
        template: this.reflectionTemplate,
        directory: 'Enums',
      };
    }
    if (hasOwnDocument.includes('all') || hasOwnDocument.includes('function')) {
      mappings[ReflectionKind.Function] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'Functions',
      };
    }
    if (hasOwnDocument.includes('all') || hasOwnDocument.includes('type')) {
      mappings[ReflectionKind.TypeAlias] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'Types',
      };
    }
    if (hasOwnDocument.includes('all') || hasOwnDocument.includes('variable')) {
      mappings[ReflectionKind.Variable] = {
        isLeaf: true,
        template: this.memberTemplate,
        directory: 'Variables',
      };
    }
    return mappings;
  }

  protected onBeginPage(page: PageEvent) {
    this.getRenderContext().activeLocation = page.url;
  }
}
