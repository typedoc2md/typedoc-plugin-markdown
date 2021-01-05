import * as fs from 'fs';

import * as Handlebars from 'handlebars';
import {
  BindOption,
  ContainerReflection,
  DeclarationReflection,
  NavigationItem,
  ProjectReflection,
  Reflection,
  Renderer,
  UrlMapping,
} from 'typedoc';
import { ReflectionGroup, ReflectionKind } from 'typedoc/dist/lib/models';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Theme } from 'typedoc/dist/lib/output/theme';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { Breadcrumbs } from './components/breadcrumbs';
import { Comments } from './components/comments';
import { ContextAwareHelpers } from './components/options';

/**
 * The MarkdownTheme is based on TypeDoc's DefaultTheme @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/DefaultTheme.ts.
 * - html specific components are removed from the renderer
 * - markdown specefic components have been added
 */

export default class MarkdownTheme extends Theme {
  @BindOption('readme')
  readme!: string;
  @BindOption('entryPoints')
  entryPoints!: string[];
  @BindOption('allReflectionsHaveOwnDocument')
  allReflectionsHaveOwnDocument!: boolean;
  @BindOption('filenameSeparator')
  filenameSeparator!: string;
  @BindOption('entryDocument')
  entryDocument!: string;

  // creates an isolated Handlebars environment to store context aware helpers
  static HANDLEBARS = Handlebars.create();

  static URL_PREFIX = /^(http|ftp)s?:\/\//;

  // formarts page content after render
  static formatContents(contents: string) {
    return (
      contents
        .replace(/[\r\n]{3,}/g, '\n\n')
        .replace(/!spaces/g, '')
        .replace(/^\s+|\s+$/g, '') + '\n'
    );
  }

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onPageEnd, 1024);

    // cleanup html specific components
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');
    renderer.removeComponent('marked-links');
    renderer.removeComponent('legend');
    renderer.removeComponent('navigation');

    // add markdown related componenets / helpers
    renderer.addComponent('options', new ContextAwareHelpers(renderer));
    renderer.addComponent('breadcrumbs', new Breadcrumbs(renderer));
    renderer.addComponent('comments', new Comments(renderer));
  }

  /**
   * Test if directory is output directory
   * @param outputDirectory
   */
  isOutputDirectory(outputDirectory: string): boolean {
    let isOutputDirectory = true;
    const listings = fs.readdirSync(outputDirectory);

    listings.forEach((listing) => {
      if (!this.allowedDirectoryListings().includes(listing)) {
        isOutputDirectory = false;
        return;
      }
    });

    return isOutputDirectory;
  }

  // The allowed directory and files listing used to check the output directory
  allowedDirectoryListings() {
    return [
      this.entryDocument,
      this.globalsFile,
      ...this.mappings.map((mapping) => mapping.directory),
      'media',
      '.DS_Store',
    ];
  }

  /**
   * This method is essentially a copy of the TypeDocs DefaultTheme.getUrls with extensions swapped out to .md
   * Map the models of the given project to the desired output files.
   *
   * @param project  The project whose urls should be generated.
   * @returns        A list of [[UrlMapping]] instances defining which models
   *                 should be rendered to which files.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    if (this.readme === 'none') {
      project.url = this.entryDocument;
      urls.push(new UrlMapping(this.entryDocument, project, 'reflection.hbs'));
    } else {
      project.url = this.globalsFile;
      urls.push(new UrlMapping(this.globalsFile, project, 'reflection.hbs'));
      urls.push(new UrlMapping(this.entryDocument, project, 'index.hbs'));
    }
    project.children?.forEach((child: Reflection) => {
      if (child instanceof DeclarationReflection) {
        this.buildUrls(child as DeclarationReflection, urls);
      }
    });
    return urls;
  }

  /**
   * This is mostly a copy of the TypeDoc DefaultTheme.buildUrls method with .html ext switched to .md
   * Builds the url for the the given reflection and all of its children.
   *
   * @param reflection  The reflection the url should be created for.
   * @param urls The array the url should be appended to.
   * @returns The altered urls array.
   */

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

  /**
   * Returns the full url of a given mapping and reflection
   * @param mapping
   * @param reflection
   */
  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    return mapping.directory + '/' + this.getUrl(reflection) + '.md';
  }

  /**
   * @see DefaultTheme.getUrl
   * Return a url for the given reflection.
   *
   * @param reflection  The reflection the url should be generated for.
   * @param relative    The parent reflection the url generation should stop on.
   * @param separator   The separator used to generate the url.
   * @returns           The generated url.
   */
  getUrl(reflection: Reflection): string {
    const reflectionName = reflection.getAlias();
    const paths = reflection
      .getFullName()
      .split('.')
      .map((name) => name.toLowerCase());
    paths.pop();
    if (this.filenameSeparator === 'legacy') {
      return paths.length > 0
        ? `_${paths.join('_')}_.${reflectionName}`
        : `_${reflectionName}_`;
    }
    return [...paths, reflectionName].join(this.filenameSeparator);
  }

  /**
   * Similar to DefaultTheme.applyAnchorUrl method with added but the anchors are computed from the reflection structure
   * Generate an anchor url for the given reflection and all of its children.
   *
   * @param reflection  The reflection an anchor url should be created for.
   * @param container   The nearest reflection having an own document.
   */
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

  getNavigation(project: ProjectReflection): NavigationItem {
    const buildNavigationGroups = (
      navigation: NavigationItem,
      groups: ReflectionGroup[],
    ) => {
      groups
        .filter((group) => group.allChildrenHaveOwnDocument())
        .forEach((reflectionGroup) => {
          let reflectionGroupItem = navigation.children?.find(
            (child) => child.title === reflectionGroup.title,
          );
          if (!reflectionGroupItem) {
            reflectionGroupItem = createNavigationItem(reflectionGroup.title);
            navigation.children?.push(reflectionGroupItem);
          }
          reflectionGroup.children.forEach((reflectionGroupChild) => {
            const reflectionGroupChildItem = createNavigationItem(
              reflectionGroupChild.getFullName(),
              reflectionGroupChild.url,
            );
            if (reflectionGroupItem) {
              reflectionGroupItem.children?.push(reflectionGroupChildItem);
            }
            const reflection = reflectionGroupChild as ContainerReflection;
            if (reflection.groups) {
              buildNavigationGroups(navigation, reflection.groups);
            }
          });
        });
    };

    const createNavigationItem = (title: string, url?: string) => {
      const navigationItem = new NavigationItem(title.replace(/\"/g, ''), url);
      navigationItem.isLabel = !url;
      navigationItem.children = [];
      delete navigationItem.reflection;
      delete navigationItem.parent;
      return navigationItem;
    };

    const sortNavigationGroups = (a: NavigationItem, b: NavigationItem) => {
      const weights = {
        ['Namespaces']: 1,
        ['Enumerations']: 2,
        ['Classes']: 3,
        ['Interfaces']: 4,
        ['Type aliases']: 5,
        ['Variables']: 6,
        ['Functions']: 7,
        ['Object literals']: 8,
      };
      const aWeight = weights[a.title] || 0;
      const bWeight = weights[b.title] || 0;
      return aWeight - bWeight;
    };
    const hasSeperateGlobals = this.readme !== 'none';
    const navigation = createNavigationItem(project.name);
    const rootName = this.entryPoints.length > 1 ? 'Modules' : 'Exports';
    navigation.children?.push(
      createNavigationItem(
        hasSeperateGlobals ? 'Readme' : rootName,
        this.entryDocument,
      ),
    );
    if (hasSeperateGlobals) {
      navigation.children?.push(
        createNavigationItem(rootName, this.globalsFile),
      );
    }
    if (project.groups) {
      buildNavigationGroups(navigation, project.groups);
    }
    navigation.children?.sort(sortNavigationGroups);
    return navigation;
  }

  private onPageEnd(page: PageEvent) {
    page.contents = page.contents
      ? MarkdownTheme.formatContents(page.contents)
      : '';
  }

  get mappings() {
    return [
      {
        kind: [ReflectionKind.Class],
        isLeaf: false,
        directory: 'classes',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Interface],
        isLeaf: false,
        directory: 'interfaces',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Enum],
        isLeaf: false,
        directory: 'enums',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Namespace, ReflectionKind.Module],
        isLeaf: false,
        directory: 'modules',
        template: 'reflection.hbs',
      },
      ...(this.allReflectionsHaveOwnDocument
        ? [
            {
              kind: [ReflectionKind.Variable],
              isLeaf: true,
              directory: 'variables',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.TypeAlias],
              isLeaf: true,
              directory: 'types',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.Function],
              isLeaf: true,
              directory: 'functions',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.ObjectLiteral],
              isLeaf: true,
              directory: 'literals',
              template: 'reflection.member.hbs',
            },
          ]
        : []),
    ];
  }

  get globalsFile() {
    return 'modules.md';
  }

  get navigationEnabled() {
    return false;
  }
}
