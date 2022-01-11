import * as fs from 'fs';
import { RendererEvent, Renderer, DeclarationReflection } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { GithubWikiThemeContext } from './theme-context';

export class GithubWikiTheme extends MarkdownTheme {
  private _contextCache?: GithubWikiThemeContext;
  override getRenderContext() {
    if (!this._contextCache) {
      this._contextCache = new GithubWikiThemeContext(
        this,
        this.application.options,
      );
    }
    return this._contextCache;
  }

  constructor(renderer: Renderer) {
    super(renderer);

    this.listenTo(this.owner, {
      [RendererEvent.BEGIN]: this.writeSidebar,
    });
  }

  toUrl(mapping: any, reflection: DeclarationReflection) {
    return `${reflection.getFullName().replace(/\//g, '.')}.md`;
  }

  writeSidebar(renderer: any) {
    const parseUrl = (url: string) => '../wiki/' + url.replace('.md', '');
    const navigation = this.getNavigation(renderer.project);
    const navJson: string[] = [`## ${renderer.project.name}\n`];
    const allowedSections = ['Home', 'Modules', 'Namespaces'];
    navigation.children
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
