import * as fs from 'fs-extra';
import { DeclarationReflection, NavigationItem, Reflection } from 'typedoc';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { UtilsComponent } from './components/utils.component';

export default class GithubWikiTheme extends MarkdownTheme {
  renderer: Renderer;
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.renderer = renderer;
    renderer.addComponent('github-wiki-utils', new UtilsComponent(renderer));

    this.listenTo(renderer, RendererEvent.END, this.onRendererEnd, 1024);
  }
  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    const kindLabelMap = {
      modules: 'Module',
      classes: 'Class',
      interfaces: 'Interface',
      functions: 'Function',
      enumurations: 'Enum',
    };
    return (
      (kindLabelMap[mapping.directory] || mapping.directory) +
      ': ' +
      this.getUrl(reflection) +
      '.md'
    );
  }

  getUrl(reflection: Reflection): string {
    const url = reflection.name;
    return url;
  }

  onRendererEnd(renderer: RendererEvent) {
    const parseUrl = (url: string) => '../wiki/' + url.replace('.md', '');
    const navigation: NavigationItem = this.getNavigation(renderer.project);
    const navJson: string[] = [
      `## [${renderer.project.name}](${parseUrl(this.entryFile)})\n`,
    ];
    if (this.readme !== 'none') {
      navJson.push(`- [Globals](${parseUrl(this.globalsFile)})`);
    }
    if (navigation.children) {
      navigation.children.forEach((navItem) => {
        if (navItem.isLabel) {
          navJson.push(`\n### ${navItem.title}\n`);
          navItem.children?.forEach((navItemChild) => {
            const longTitle = navItemChild.title.split('.');
            const shortTitle = longTitle[longTitle.length - 1];
            navJson.push(
              `- [${shortTitle}](${parseUrl(encodeURI(navItemChild.url))})`,
            );
          });
        }
      });
    }
    fs.outputFileSync(
      renderer.outputDirectory + '/_Sidebar.md',
      navJson.join('\n'),
    );
  }

  get entryFile() {
    return 'Home.md';
  }
  get globalsFile() {
    return 'Globals.md';
  }
}
