import * as path from 'path';
import {
  BindOption,
  ContainerReflection,
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Renderer,
  RendererEvent,
  Theme,
  UrlMapping,
} from 'typedoc';
import { getKindPlural } from './groups';

import { NavigationItem } from './navigation-item';

import {
  indexTemplate,
  reflectionMemberTemplate,
  reflectionTemplate,
  registerHelpers,
  registerPartials,
} from './render-utils';
import { formatContents } from './utils';

export class MarkdownTheme extends Theme {
  @BindOption('allReflectionsHaveOwnDocument')
  allReflectionsHaveOwnDocument!: boolean;

  @BindOption('entryDocument')
  entryDocument: string;

  @BindOption('entryPoints')
  entryPoints!: string[];

  @BindOption('filenameSeparator')
  filenameSeparator!: string;

  @BindOption('hideBreadcrumbs')
  hideBreadcrumbs!: boolean;

  @BindOption('hideInPageTOC')
  hideInPageTOC!: boolean;

  @BindOption('hidePageTitle')
  hidePageTitle!: boolean;

  @BindOption('indexTitle')
  indexTitle!: string;

  @BindOption('namedAnchors')
  namedAnchors!: boolean;

  @BindOption('readme')
  readme!: string;

  @BindOption('out')
  out!: string;

  @BindOption('publicPath')
  publicPath!: string;

  static URL_PREFIX = /^(http|ftp)s?:\/\//;

  project?: ProjectReflection;
  reflection?: DeclarationReflection;
  location!: string;

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.onBeginRenderer,
      [PageEvent.BEGIN]: this.onBeginPage,
    });

    registerPartials();
    registerHelpers(this);
  }

  render(page: PageEvent<Reflection>): string {
    return formatContents(page.template(page) as string);
  }

  getUrls(project: ProjectReflection) {
    const urls: UrlMapping[] = [];
    const noReadmeFile = this.readme.endsWith('none');
    if (noReadmeFile) {
      project.url = this.entryDocument;
      urls.push(
        new UrlMapping(
          this.entryDocument,
          project,
          this.getReflectionTemplate(),
        ),
      );
    } else {
      project.url = this.globalsFile;
      urls.push(
        new UrlMapping(this.globalsFile, project, this.getReflectionTemplate()),
      );
      urls.push(
        new UrlMapping(this.entryDocument, project, this.getIndexTemplate()),
      );
    }
    project.children?.forEach((child: Reflection) => {
      if (child instanceof DeclarationReflection) {
        this.buildUrls(child as DeclarationReflection, urls);
      }
    });
    return urls;
  }

  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[],
  ): UrlMapping[] {
    const mapping = this.mappings.find((mapping) =>
      reflection.kindOf(mapping.kind),
    );
    if (mapping) {
      if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
        const url = this.toUrl(mapping, reflection);
        urls.push(new UrlMapping(url, reflection, mapping.template));
        reflection.url = url;
        reflection.hasOwnDocument = true;
      }
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

  toUrl(mapping: any, reflection: DeclarationReflection) {
    return mapping.directory + '/' + this.getUrl(reflection) + '.md';
  }

  getUrl(reflection: Reflection, relative?: Reflection): string {
    let url = reflection.getAlias();

    if (
      reflection.parent &&
      reflection.parent !== relative &&
      !(reflection.parent instanceof ProjectReflection)
    ) {
      url =
        this.getUrl(reflection.parent, relative) + this.filenameSeparator + url;
    }

    return url;
  }

  applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
      const reflectionId = reflection.name.toLowerCase();
      const anchor = this.toAnchorRef(reflectionId);
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

  toAnchorRef(reflectionId: string) {
    return reflectionId;
  }

  getRelativeUrl(absolute: string) {
    if (MarkdownTheme.URL_PREFIX.test(absolute)) {
      return absolute;
    } else {
      const relative = path.relative(
        path.dirname(this.location),
        path.dirname(absolute),
      );
      return path.join(relative, path.basename(absolute)).replace(/\\/g, '/');
    }
  }

  getReflectionTemplate() {
    return (pageEvent: PageEvent<ContainerReflection>) => {
      return reflectionTemplate(pageEvent, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        data: { theme: this },
      });
    };
  }

  getReflectionMemberTemplate() {
    return (pageEvent: PageEvent<ContainerReflection>) => {
      return reflectionMemberTemplate(pageEvent, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        data: { theme: this },
      });
    };
  }

  getIndexTemplate() {
    return (pageEvent: PageEvent<ContainerReflection>) => {
      return indexTemplate(pageEvent, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
        data: { theme: this },
      });
    };
  }

  getNavigation(project: ProjectReflection) {
    const urls = this.getUrls(project);

    const getUrlMapping = (name) => {
      if (!name) {
        return '';
      }
      return urls.find((url) => url.model.name === name);
    };

    const createNavigationItem = (
      title: string,
      url: string | undefined,
      isLabel: boolean,
      children: NavigationItem[] = [],
    ) => {
      const navigationItem = new NavigationItem(title, url);
      navigationItem.isLabel = isLabel;
      navigationItem.children = children;
      const { reflection, parent, ...filteredNavigationItem } = navigationItem;
      return filteredNavigationItem as NavigationItem;
    };
    const navigation = createNavigationItem(project.name, undefined, false);
    const hasReadme = !this.readme.endsWith('none');
    if (hasReadme) {
      navigation.children?.push(
        createNavigationItem('Readme', this.entryDocument, false),
      );
    }
    if (this.entryPoints.length === 1) {
      navigation.children?.push(
        createNavigationItem(
          'Exports',
          hasReadme ? this.globalsFile : this.entryDocument,
          false,
        ),
      );
    }
    this.mappings.forEach((mapping) => {
      const kind = mapping.kind[0];
      const items = project.getReflectionsByKind(kind);
      if (items.length > 0) {
        const children = items
          .map((item) =>
            createNavigationItem(
              item.getFullName(),
              (getUrlMapping(item.name) as any)?.url as string,
              true,
            ),
          )
          .sort((a, b) => (a.title > b.title ? 1 : -1));
        const group = createNavigationItem(
          getKindPlural(kind),
          undefined,
          true,
          children,
        );
        navigation.children?.push(group);
      }
    });
    return navigation;
  }

  get mappings() {
    return [
      {
        kind: [ReflectionKind.Module],
        isLeaf: false,
        directory: 'modules',
        template: this.getReflectionTemplate(),
      },
      {
        kind: [ReflectionKind.Namespace],
        isLeaf: false,
        directory: 'modules',
        template: this.getReflectionTemplate(),
      },
      {
        kind: [ReflectionKind.Enum],
        isLeaf: false,
        directory: 'enums',
        template: this.getReflectionTemplate(),
      },
      {
        kind: [ReflectionKind.Class],
        isLeaf: false,
        directory: 'classes',
        template: this.getReflectionTemplate(),
      },
      {
        kind: [ReflectionKind.Interface],
        isLeaf: false,
        directory: 'interfaces',
        template: this.getReflectionTemplate(),
      },
      ...(this.allReflectionsHaveOwnDocument
        ? [
            {
              kind: [ReflectionKind.TypeAlias],
              isLeaf: true,
              directory: 'types',
              template: this.getReflectionMemberTemplate(),
            },
            {
              kind: [ReflectionKind.Variable],
              isLeaf: true,
              directory: 'variables',
              template: this.getReflectionMemberTemplate(),
            },
            {
              kind: [ReflectionKind.Function],
              isLeaf: true,
              directory: 'functions',
              template: this.getReflectionMemberTemplate(),
            },
          ]
        : []),
    ];
  }

  /**
   * Triggered before the renderer starts rendering a project.
   *
   * @param event  An event object describing the current render operation.
   */
  protected onBeginRenderer(event: RendererEvent) {
    this.project = event.project;
  }

  /**
   * Triggered before a document will be rendered.
   *
   * @param page  An event object describing the current render operation.
   */
  protected onBeginPage(page: PageEvent) {
    this.location = page.url;
    this.reflection =
      page.model instanceof DeclarationReflection ? page.model : undefined;
  }

  get globalsFile() {
    return 'modules.md';
  }
}
