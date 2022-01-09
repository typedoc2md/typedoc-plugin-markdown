import * as fs from 'fs';

import {
  ReflectionKind,
  PageEvent,
  RendererEvent,
  Renderer,
  ContainerReflection,
} from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { getKindPlural } from 'typedoc-plugin-markdown/dist/groups';
import {
  getPageTitle,
  prependYAML,
} from 'typedoc-plugin-markdown/dist/utils/front-matter';

export class HugoTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.entryDocument = '_index.md';
    this.hideBreadcrumbs = true;
    this.hidePageTitle = true;

    this.listenTo(this.owner, {
      [PageEvent.END]: this.onHugoPageEnd,
      [RendererEvent.END]: this.onHugoRendererEnd,
    });
  }

  private onHugoPageEnd(page: PageEvent<ContainerReflection>) {
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
    const navigation = theme.getNavigation(renderer.project);

    if (navigation.children) {
      navigation.children
        // filter navigation group items
        .filter((navItem) => navItem.isLabel)
        .forEach((navItem) => {
          // get the mapping so we know what dir to write to
          const mapping = theme.mappings.find((mapping) =>
            mapping.kind.some(
              (kind: ReflectionKind) => getKindPlural(kind) === navItem.title,
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

  getTitle(page: PageEvent<ContainerReflection>, linkTitle: boolean) {
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
