import * as path from 'path';

import * as fs from 'fs-extra';
import {
  BindOption,
  DeclarationReflection,
  NavigationItem,
  ProjectReflection,
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
    this.renderer = renderer;
    this.renderer.application.options.setValue('entryDocument', 'Home.md');
    this.renderer.application.options.setValue('hideBreadcrumbs', true);
    this.renderer.application.options.setValue('hidePageTitle', true);
    renderer.addComponent('utils', new UtilsComponent(renderer));
    this.listenTo(renderer, RendererEvent.END, this.onRendererEnd, 1024);
  }

  getUrls(project: ProjectReflection) {
    return super.getUrls(project).map((urlMapping) => {
      const noReadmeFile = this.readme == path.join(process.cwd(), 'none');
      if (noReadmeFile && project.url === urlMapping.url) {
        return {
          ...urlMapping,
          url: this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md',
        };
      }
      return urlMapping;
    });
  }

  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    return `${GroupPlugin.getKindSingular(reflection.kind)}: ${this.getUrl(
      reflection,
    )}.md`;
  }

  getUrl(reflection: Reflection): string {
    const url = reflection.name;
    return url;
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
    fs.outputFileSync(
      renderer.outputDirectory + '/_Sidebar.md',
      navJson.join('\n') + '\n',
    );
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
