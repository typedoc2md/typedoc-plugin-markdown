import * as fs from 'fs-extra';
import { NavigationItem, Renderer } from 'typedoc';
import {
  ContainerReflection,
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  ReflectionKind,
} from 'typedoc/dist/lib/models/reflections';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Theme } from 'typedoc/dist/lib/output/theme';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { CommentsPlugin } from '../comments.plugin';
import { FrontMatterPlugin } from '../front-matter.plugin';

export class MarkdownTheme extends Theme {
  navigation: NavigationItem;

  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onPageEnd, 1024);

    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

    renderer.addComponent('comments', new CommentsPlugin(renderer));

    if (
      this.application.options.getValue('platform') === 'docusaurus' ||
      this.application.options.getValue('platform') === 'vuepress'
    ) {
      renderer.addComponent('frontmatter', new FrontMatterPlugin(renderer));
    }
  }

  isOutputDirectory(outputDirectory: string): boolean {
    let isOutputDirectory = true;
    const allowedListings = [
      this.indexName,
      'globals.md',
      'SUMMARY.md',
      'classes',
      'enums',
      'interfaces',
      'media',
      'modules',
      '.DS_Store',
    ];

    const listings = fs.readdirSync(outputDirectory);

    if (!listings.includes(this.indexName)) {
      isOutputDirectory = false;
      return;
    }

    listings.forEach(listing => {
      if (!allowedListings.includes(listing)) {
        isOutputDirectory = false;
        return;
      }
    });

    return isOutputDirectory;
  }

  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);

    if (project.readme && this.application.options.getValue('readme') !== 'none') {
      entryPoint.url = this.globalsName;
      urls.push(new UrlMapping(this.globalsName, entryPoint, 'reflection.hbs'));
      urls.push(new UrlMapping(this.indexName, entryPoint, 'index.hbs'));
    } else {
      entryPoint.url = this.indexName;
      urls.push(new UrlMapping(this.indexName, entryPoint, 'reflection.hbs'));
    }

    if (entryPoint.children) {
      entryPoint.children.forEach((child: Reflection) => {
        if (child instanceof DeclarationReflection) {
          this.buildUrls(child, urls);
        }
      });
    }

    this.navigation = this.getNavigation(project);

    return urls;
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

  applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
      reflection.url = container.url + '#' + this.getAnchor(reflection);
      reflection.anchor = this.getAnchor(reflection);
      reflection.hasOwnDocument = false;
    }
    reflection.traverse(child => {
      if (child instanceof DeclarationReflection) {
        this.applyAnchorUrl(child, container);
      }
    });
  }

  getAnchor(reflection: Reflection) {
    return MarkdownTheme.getAnchorRef(reflection);
  }

  static getAnchorRef(reflection: Reflection) {
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

  get indexName() {
    return 'README.md';
  }

  get globalsName() {
    return 'globals.md';
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
