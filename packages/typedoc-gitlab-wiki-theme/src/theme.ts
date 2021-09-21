import * as fs from 'fs';

import { Renderer, DeclarationReflection, RendererEvent } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown/dist/theme';

export class GitlabTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.owner, {
      [RendererEvent.END]: this.onGitLabRendererEnd,
    });
  }

  getRelativeUrl(url: string) {
    const relativeUrl = url.replace(/(.*).md/, '$1').replace(/ /g, '-');
    return relativeUrl.startsWith('..') ? relativeUrl : './' + relativeUrl;
  }

  toUrl(mapping: any, reflection: DeclarationReflection) {
    return `${mapping.directory}/${reflection.getFullName()}.md`;
  }

  onGitLabRendererEnd(renderer: RendererEvent) {
    const parseUrl = (url: string) => url.replace(/(.*).md/, '$1');
    const navigation = this.getNavigation(renderer.project);
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
