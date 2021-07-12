import * as fs from 'fs';

import {
  BindOption,
  DeclarationReflection,
  NavigationItem,
  Reflection,
} from 'typedoc';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { GroupPlugin } from 'typedoc/dist/lib/converter/plugins';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { UtilsComponent } from './components/utils';

export default class GithubWikiTheme extends MarkdownTheme {
  renderer: Renderer;
  @BindOption('entryPoints')
  entryPoints!: string[];
  @BindOption('readme')
  readme!: string;

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.addComponent('utils', new UtilsComponent(renderer));
    this.listenTo(renderer, RendererEvent.END, this.onRendererEnd, 1024);
  }

  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    return `${GroupPlugin.getKindSingular(reflection.kind)}-${this.getUrl(
      reflection,
    )}.md`;
  }

  getUrl(reflection: Reflection): string {
    const url = reflection.name;
    return url;
  }

  isOutputDirectory(outputDirectory: string): boolean {
    let isOutputDirectory = true;
    const listings = fs.readdirSync(outputDirectory);
    listings.forEach((listing) => {
      if (
        !this.allowedDirectoryListings().includes(listing) &&
        !listing.match('^Class|^Enumeration|^Interface|^Module|^Namespace')
      ) {
        isOutputDirectory = false;
        return false;
      }
    });
    return isOutputDirectory;
  }

  allowedDirectoryListings() {
    return [
      this.entryDocument,
      this.globalsFile,
      'media',
      '.DS_Store',
      '_Sidebar.md',
    ];
  }

  onRendererEnd(renderer: RendererEvent) {
    const parseUrl = (url: string) => '../wiki/' + url.replace('.md', '');
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
      renderer.outputDirectory + '/_Sidebar.md',
      navJson.join('\n') + '\n',
    );
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
