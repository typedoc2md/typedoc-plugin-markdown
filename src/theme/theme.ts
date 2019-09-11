import * as fs from 'fs-extra';
import {
  ContainerReflection,
  DeclarationReflection,
  DefaultTheme,
  NavigationItem,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Renderer,
  UrlMapping,
} from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Theme } from 'typedoc/dist/lib/output/theme';

import { CommentsComponent } from '../components/comments.component';
import { OptionsComponent } from '../components/options.component';

export default class MarkdownTheme extends Theme {
  // The name of the index file
  indexName = 'README.md';

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onPageEnd, 1024);

    // cleanup html specific components
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

    // add markdown related componenets
    renderer.addComponent('comments', new CommentsComponent(renderer));
    renderer.addComponent('options', new OptionsComponent(renderer));
  }

  /**
   * Test if directory is output directory
   * @param outputDirectory
   */
  isOutputDirectory(outputDirectory: string): boolean {
    let isOutputDirectory = true;

    const listings = fs.readdirSync(outputDirectory);

    if (!listings.includes(this.indexName)) {
      isOutputDirectory = false;
      return;
    }

    listings.forEach(listing => {
      if (!this.allowedDirectoryListings().includes(listing)) {
        isOutputDirectory = false;
        return;
      }
    });

    return isOutputDirectory;
  }

  // The allowed directory and files listing used to check the output directory
  allowedDirectoryListings() {
    return [this.indexName, 'globals.md', 'classes', 'enums', 'interfaces', 'modules', 'media', '.DS_Store'];
  }

  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    if (this.application.options.getValue('readme') === 'none') {
      entryPoint.url = this.indexName;
      urls.push(new UrlMapping(this.indexName, entryPoint, 'reflection.hbs'));
    } else {
      entryPoint.url = 'globals.md';
      urls.push(new UrlMapping('globals.md', entryPoint, 'reflection.hbs'));
      urls.push(new UrlMapping(this.indexName, project, 'index.hbs'));
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
   * This is mostly a copy of the DefaultTheme method with .html ext switched to .md
   * Builds the url for the the given reflection and all of its children.
   *
   * @param reflection  The reflection the url should be created for.
   * @param urls The array the url should be appended to.
   * @returns The altered urls array.
   */

  buildUrls(reflection: DeclarationReflection, urls: UrlMapping[]): UrlMapping[] {
    const mapping = DefaultTheme.getMapping(reflection);
    if (mapping) {
      if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
        const url = `${mapping.directory}/${DefaultTheme.getUrl(reflection)}.md`;
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
   * Similar to DefaultTheme method with added functionality to cater for bitbucket heading and single file anchors
   * Generate an anchor url for the given reflection and all of its children.
   *
   * @param reflection  The reflection an anchor url should be created for.
   * @param container   The nearest reflection having an own document.
   */
  applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
      const anchor = this.toAnchorRef(reflection);
      reflection.url = container.url + '#' + anchor;
      reflection.anchor = anchor;
      reflection.hasOwnDocument = false;
    }
    reflection.traverse(child => {
      if (child instanceof DeclarationReflection) {
        this.applyAnchorUrl(child, container);
      }
    });
  }

  /**
   * Converts a reflection to anchor ref
   * @param reflection
   */
  toAnchorRef(reflection: Reflection) {
    function parseAnchorRef(ref: string) {
      return ref.replace(/"/g, '').replace(/ /g, '-');
    }
    let anchorPrefix = '';
    reflection.flags.forEach(flag => (anchorPrefix += `${flag}-`));
    const prefixRef = parseAnchorRef(anchorPrefix);
    const reflectionRef = parseAnchorRef(reflection.name);
    const anchorRef = prefixRef + reflectionRef;
    return anchorRef.toLowerCase();
  }

  /**
   * Copy of default theme
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
          this.application.logger.warn('The given entry point `%s` is not a container.', entryPoint);
        }
      } else {
        this.application.logger.warn('The entry point `%s` could not be found.', entryPoint);
      }
    }
    return project;
  }

  getNavigation(project: ProjectReflection) {
    function createNavigationGroup(name: string, url = null) {
      const navigationGroup = new NavigationItem(name, url);
      navigationGroup.children = [];
      delete navigationGroup.cssClasses;
      delete navigationGroup.reflection;
      return navigationGroup;
    }

    function getNavigationGroup(reflection: DeclarationReflection) {
      if (reflection.kind === ReflectionKind.ExternalModule) {
        return externalModulesNavigation;
      }
      if (reflection.kind === ReflectionKind.Module) {
        return modulesNavigation;
      }
      if (reflection.kind === ReflectionKind.Class) {
        return classesNavigation;
      }
      if (reflection.kind === ReflectionKind.Enum) {
        return enumsNavigation;
      }
      if (reflection.kind === ReflectionKind.Interface) {
        return interfacesNavigation;
      }
      return null;
    }

    function addNavigationItem(reflection: DeclarationReflection, parentNavigationItem?: NavigationItem, group?) {
      let navigationGroup: NavigationItem;
      if (group) {
        navigationGroup = group;
      } else {
        navigationGroup = getNavigationGroup(reflection);
      }
      let titlePrefix = '';
      if (parentNavigationItem && parentNavigationItem.title) {
        titlePrefix = parentNavigationItem.title.replace(/\"/g, '') + '.';
      }

      const title = titlePrefix + reflection.name.replace(/\"/g, '');
      const url = reflection.url;
      const nav = new NavigationItem(title, url, parentNavigationItem);
      nav.parent = parentNavigationItem;

      navigationGroup.children.push(nav);
      if (reflection.children) {
        reflection.children.forEach(reflectionChild => {
          if (reflectionChild.hasOwnDocument) {
            addNavigationItem(reflectionChild as DeclarationReflection, nav, navigationGroup);
          }
        });
      }
      delete nav.cssClasses;
      delete nav.reflection;
      return nav;
    }
    const isModules = this.application.options.getValue('mode') === 1;

    const navigation = createNavigationGroup(project.name, this.indexName);
    const externalModulesNavigation = createNavigationGroup('External Modules');
    const modulesNavigation = createNavigationGroup('Modules');
    const classesNavigation = createNavigationGroup('Classes');
    const enumsNavigation = createNavigationGroup('Enums');
    const interfacesNavigation = createNavigationGroup('Interfaces');

    if (!isModules) {
      project.groups.forEach(group => {
        group.children.forEach(reflection => {
          if (reflection.hasOwnDocument) {
            addNavigationItem(reflection as DeclarationReflection);
          }
        });
      });
    }

    if (isModules) {
      project.groups[0].children.forEach(module => {
        const moduleNavigation = addNavigationItem(module as DeclarationReflection);
        if ((module as DeclarationReflection).children) {
          (module as DeclarationReflection).children.forEach(reflection => {
            if (reflection.hasOwnDocument) {
              addNavigationItem(reflection, moduleNavigation);
            }
          });
        }
      });
    }

    if (externalModulesNavigation.children.length) {
      navigation.children.push(externalModulesNavigation);
    }
    if (modulesNavigation.children.length) {
      navigation.children.push(modulesNavigation);
    }
    if (classesNavigation.children.length) {
      navigation.children.push(classesNavigation);
    }
    if (enumsNavigation.children.length) {
      navigation.children.push(enumsNavigation);
    }
    if (interfacesNavigation.children.length) {
      navigation.children.push(interfacesNavigation);
    }

    return navigation;
  }

  private onPageEnd(page: PageEvent) {
    page.contents = page.contents ? MarkdownTheme.formatContents(page.contents) : '';
  }

  static formatContents(contents: string) {
    return contents
      .replace(/[\r\n]{3,}/g, '\n\n')
      .replace(/!spaces/g, '')
      .replace(/^\s+|\s+$/g, '');
  }
}
