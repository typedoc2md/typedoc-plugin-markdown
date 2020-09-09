import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';
import {
  ContainerReflection,
  DeclarationReflection,
  NavigationItem,
  ProjectReflection,
  Reflection,
  Renderer,
  UrlMapping,
} from 'typedoc';
import { ReflectionGroup } from 'typedoc/dist/lib/models';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Theme } from 'typedoc/dist/lib/output/theme';
import {
  DefaultTheme,
  TemplateMapping,
} from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { ContextAwareHelpersComponent } from './components/context-aware-helpers.component';
import { OptionsComponent } from './components/options.component';

/**
 * The MarkdownTheme is based on TypeDoc's DefaultTheme @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/DefaultTheme.ts.
 * - html specific components are removed from the renderer
 * - markdown specefic components have been added
 */

export default class MarkdownTheme extends Theme {
  // creates an isolated Handlebars environment to store context aware helpers
  static HANDLEBARS = Handlebars.create();

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onPageEnd, 1024);

    // cleanup html specific components
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

    // add markdown related componenets
    renderer.addComponent(
      'contextAwareHelpers',
      new ContextAwareHelpersComponent(renderer),
    );
    renderer.addComponent('options', new OptionsComponent(renderer));
  }

  /**
   * Test if directory is output directory
   * @param outputDirectory
   */
  isOutputDirectory(outputDirectory: string): boolean {
    const entryFileName =
      (this.application.options.getValue('entryFileName') as string) + '.md';
    let isOutputDirectory = true;

    const listings = fs.readdirSync(outputDirectory);

    listings.forEach((listing) => {
      if (!this.allowedDirectoryListings(entryFileName).includes(listing)) {
        isOutputDirectory = false;
        return;
      }
    });

    return isOutputDirectory;
  }

  // The allowed directory and files listing used to check the output directory
  allowedDirectoryListings(entryFileName: string) {
    return [
      entryFileName,
      'README.md',
      'globals.md',
      'classes',
      'enums',
      'interfaces',
      'modules',
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
    const entryPoint = this.getEntryPoint(project);
    const entryFileName =
      (this.application.options.getValue('entryFileName') as string) + '.md';
    const omitReadme = this.application.options.getValue('readme') === 'none';

    if (omitReadme) {
      entryPoint.url = entryFileName;
      urls.push(
        new UrlMapping(entryFileName, { ...entryPoint }, 'reflection.hbs'),
      );
    } else {
      entryPoint.url = 'globals.md';
      urls.push(new UrlMapping('globals.md', entryPoint, 'reflection.hbs'));
      urls.push(new UrlMapping(entryFileName, project, 'index.hbs'));
    }
    if (entryPoint.children) {
      entryPoint.children.forEach((child: Reflection) => {
        if (child instanceof DeclarationReflection) {
          this.buildUrls(child, urls);
        }
      });
    }
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
    const mapping = DefaultTheme.getMapping(reflection);
    if (mapping) {
      if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
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
  getUrl(
    reflection: Reflection,
    relative?: Reflection,
    separator = '.',
  ): string {
    let url = reflection.getAlias();

    if (
      reflection.parent &&
      reflection.parent !== relative &&
      !(reflection.parent instanceof ProjectReflection)
    ) {
      url =
        this.getUrl(reflection.parent, relative, separator) + separator + url;
    }

    return url;
  }

  /**
   * Similar to DefaultTheme.applyAnchorUrl method with added but the anchors are computed from the reflection structure
   * Generate an anchor url for the given reflection and all of its children.
   *
   * @param reflection  The reflection an anchor url should be created for.
   * @param container   The nearest reflection having an own document.
   */
  applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
      const reflectionName = reflection.name.toLowerCase();
      const anchor = this.application.options.getValue('bitbucketCloudAnchors')
        ? 'markdown-header-' + reflectionName
        : reflectionName;
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

  /**
   * Copy of default theme DefaultTheme.getEntryPoint
   * @param project
   */
  getEntryPoint(project: ProjectReflection): ContainerReflection {
    const entryPoint = this.owner.entryPoint;
    if (entryPoint) {
      const reflection = project.getChildByName(entryPoint);
      if (reflection) {
        if (reflection instanceof ContainerReflection) {
          return reflection;
        } else {
          this.application.logger.warn(
            'The given entry point `%s` is not a container.',
            entryPoint,
          );
        }
      } else {
        this.application.logger.warn(
          'The entry point `%s` could not be found.',
          entryPoint,
        );
      }
    }
    return project;
  }

  getNavigation(project: ProjectReflection): NavigationItem {
    const entryPoint = this.getEntryPoint(project);
    const entryFileName =
      (this.application.options.getValue('entryFileName') as string) + '.md';
    const hasSeperateGlobals =
      this.application.options.getValue('readme') !== 'none';
    const navigation = createNavigationItem(project.name);

    navigation.children.push(
      createNavigationItem(
        hasSeperateGlobals ? 'README' : 'Globals',
        entryFileName,
      ),
    );
    if (hasSeperateGlobals) {
      navigation.children.push(createNavigationItem('Globals', 'globals.md'));
    }
    buildGroups(entryPoint.groups);
    navigation.children.sort(sortCallback);

    function buildGroups(groups: ReflectionGroup[], level = 0) {
      groups.forEach((reflectionGroup) => {
        if (reflectionGroup.allChildrenHaveOwnDocument()) {
          let reflectionGroupItem = navigation.children.find(
            (child) => child.title === reflectionGroup.title,
          );
          if (!reflectionGroupItem) {
            reflectionGroupItem = createNavigationItem(reflectionGroup.title);
            navigation.children.push(reflectionGroupItem);
          }
          reflectionGroup.children.forEach((reflectionGroupChild) => {
            const reflectionGroupChildItem = createNavigationItem(
              reflectionGroupChild.getFullName().replace(/\"/g, ''),
              reflectionGroupChild.url,
            );
            reflectionGroupItem.children.push(reflectionGroupChildItem);
            const reflection = reflectionGroupChild as ContainerReflection;
            if (reflection.groups) {
              buildGroups(reflection.groups, level + 1);
            }
          });
        }
      });
    }

    function createNavigationItem(title: string, url?: string) {
      const navigationItem = new NavigationItem(title.replace(/\"/g, ''), url);
      navigationItem.children = [];
      delete navigationItem.cssClasses;
      delete navigationItem.reflection;
      delete navigationItem.isLabel;
      return navigationItem;
    }

    function sortCallback(a: NavigationItem, b: NavigationItem): number {
      const weights = {
        Namespaces: 1,
        Enumerations: 2,
        Classes: 3,
        Interfaces: 4,
      };
      const aWeight = weights[a.title] || 0;
      const bWeight = weights[b.title] || 0;
      return aWeight - bWeight;
    }

    return navigation;
  }

  private onPageEnd(page: PageEvent) {
    page.contents = page.contents
      ? MarkdownTheme.formatContents(page.contents)
      : '';
  }

  static formatContents(contents: string) {
    return (
      contents
        .replace(/[\r\n]{3,}/g, '\n\n')
        .replace(/!spaces/g, '')
        .replace(/^\s+|\s+$/g, '') + '\n'
    );
  }
}
