import * as fs from 'fs';
import { DeclarationReflection, Renderer, RendererEvent } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

export class GithubWikiTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    //this.entryDocument = 'Home.md';
    //this.hideBreadcrumbs = true;

    this.listenTo(this.owner, {
      [RendererEvent.END]: this.writeSidebar,
    });
  }

  getRelativeUrl(url: string) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }

  toUrl(mapping: any, reflection: DeclarationReflection) {
    return `${reflection.getFullName().replace(/\//g, '.')}.md`;
  }

  writeSidebar(renderer: any) {
    const parseUrl = (url: string) => '../wiki/' + url.replace('.md', '');
    //const navigation = this.getNavigation(renderer.project);
    const navJson: string[] = [`## ${renderer.project.name}\n`];
    const allowedSections = ['Home', 'Modules', 'Namespaces'];
    /*navigation.children
      ?.filter(
        (navItem) =>
          !navItem.isLabel || allowedSections.includes(navItem.title),
      )
      .forEach((navItem) => {
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
      });*/

    fs.writeFileSync(
      renderer.outputDirectory + '/_Sidebar.md',
      navJson.join('\n') + '\n',
    );
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
