import * as fs from 'fs';

import { BindOption, NavigationItem, ReflectionKind } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown/dist/theme';
import {
  getPageTitle,
  prependYAML,
} from 'typedoc-plugin-markdown/dist/utils/front-matter';
import { GroupPlugin } from 'typedoc/dist/lib/converter/plugins';
import { PageEvent, RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class HugoTheme extends MarkdownTheme {
  @BindOption('readme')
  readme!: string;
  @BindOption('indexTitle')
  indexTitle!: string;
  @BindOption('entryDocument')
  entryDocument!: string;

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onHugoPageEnd);
    this.listenTo(renderer, RendererEvent.END, this.onHugoRendererEnd);
  }

  private onHugoPageEnd(page: PageEvent) {
    const yamlVars = {
      title: this.getTitle(page, false),
      linkTitle: this.getTitle(page, true),
      slug: this.getSlug(page),
    };

    if (page.contents) {
      page.contents = prependYAML(page.contents, yamlVars);
    }
  }

  private onHugoRendererEnd(renderer: RendererEvent) {
    const theme = this.application.renderer.theme as MarkdownTheme;
    const navigation: NavigationItem = theme.getNavigation(renderer.project);

    if (navigation.children) {
      navigation.children
        // filter navigation group items
        .filter((navItem) => navItem.isLabel)
        .forEach((navItem) => {
          // get the mapping so we know what dir to write to
          const mapping = theme.mappings.find((mapping) =>
            mapping.kind.some(
              (kind: ReflectionKind) =>
                GroupPlugin.getKindPlural(kind) === navItem.title,
            ),
          );
          if (mapping) {
            fs.writeFileSync(
              renderer.outputDirectory + '/' + mapping.directory + '/_index.md',
              ['---', `title: "${navItem.title}"`, '---'].join('\n'),
            );
          }
        });
    }
  }

  getTitle(page: PageEvent, linkTitle: boolean) {
    if (page.url === this.entryDocument) {
      return page.url === page.project.url
        ? this.indexTitle || page.model.name
        : 'Readme';
    }
    if (page.url === 'modules.md' && this.indexTitle) {
      return this.indexTitle;
    }
    return linkTitle ? page.model.name : getPageTitle(page);
  }

  getSlug(page: PageEvent) {
    const slug = page.url.replace(/\.[^.$]+$/, '');
    // Only use the last part of the slug, because the folder is used to make URL
    let slugEnd = slug.split('/').pop();
    if (slugEnd === undefined) {
      slugEnd = slug;
    }
    return slugEnd;
  }
}
