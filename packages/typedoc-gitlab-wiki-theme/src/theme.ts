import * as fs from 'fs';

import { DeclarationReflection, NavigationItem } from 'typedoc';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { GroupPlugin } from 'typedoc/dist/lib/converter/plugins';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { UtilsComponent } from './utils';

export default class GitlabTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.addComponent('utils', new UtilsComponent(renderer));
    this.listenTo(renderer, RendererEvent.END, this.onGitLabRendererEnd);
  }

  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    return `${mapping.directory}/${GroupPlugin.getKindSingular(
      reflection.kind,
    )}-${reflection.name}.md`;
  }

  allowedDirectoryListings() {
    return [...super.allowedDirectoryListings(), ...['_sidebar.md']];
  }

  onGitLabRendererEnd(renderer: RendererEvent) {
    const parseUrl = (url: string) => url.replace(/(.*).md/, '$1');
    const navigation: NavigationItem = this.getNavigation(renderer.project);
    const navJson: string[] = [`## ${renderer.project.name}\n`];
    navigation.children?.forEach((navItem) => {
      if (navItem.isLabel) {
        navJson.push(`\n### ${navItem.title}\n`);
        navItem.children?.forEach((navItemChild) => {
          const longTitle = navItemChild.title.split('.');
          const shortTitle = longTitle[longTitle.length - 1];
          navJson.push(
            `- [${shortTitle}](${parseUrl(encodeURI(navItemChild.url))})`,
          );
        });
      } else {
        const title =
          navItem.url === this.entryDocument ? 'Home' : navItem.title;
        navJson.push(`- [${title}](${parseUrl(navItem.url)})`);
      }
    });
    fs.writeFileSync(
      renderer.outputDirectory + '/_sidebar.md',
      navJson.join('\n'),
    );
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
