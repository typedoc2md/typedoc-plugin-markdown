import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.indexName = 'index';
    renderer.addComponent('frontmatter', new FrontMatterComponent(renderer));
  }

  getNavObject(renderer: RendererEvent, docsRoot: string) {
    const navObject = {};
    let url = '';
    let navKey = '';
    this.getNavigation(renderer.project).children.forEach((rootNavigation) => {
      rootNavigation.children.map((item) => {
        url = item.url.replace('.md', '');
        navKey = url.substr(0, url.indexOf('/'));
        if (navKey !== undefined && navKey.length) {
          navKey = navKey[0].toUpperCase() + navKey.slice(1);
        }
        if (navObject[navKey] === undefined) {
          navObject[navKey] = [];
        }
        navObject[navKey].push(docsRoot + url);
      });
    });
    return navObject;
  }
}
