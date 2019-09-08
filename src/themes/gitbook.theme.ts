import * as fs from 'fs-extra';
import { NavigationItem } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { MarkdownTheme } from './markdown.theme';

export class GitbookTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath, options);
    this.listenTo(renderer, RendererEvent.END, this.writeSummary, 1024);
  }

  writeSummary(renderer: RendererEvent) {
    const outputDirectory = renderer.outputDirectory;
    const summaryMarkdown = this.getSummaryMarkdown(this.navigation);
    try {
      fs.writeFileSync(`${outputDirectory}/SUMMARY.md`, summaryMarkdown);
      this.application.logger.write(`[typedoc-plugin-markdown] SUMMARY.md written to ${outputDirectory}`);
    } catch (e) {
      this.application.logger.write(`[typedoc-plugin-markdown] failed to write SUMMARY at ${outputDirectory}`);
    }
  }

  getSummaryMarkdown(navigation: NavigationItem) {
    const md = [];
    md.push(`* [Globals](globals.md)`);
    navigation.children.forEach(rootNavigation => {
      if (rootNavigation.children) {
        md.push(`* [${rootNavigation.title}](${rootNavigation.url})`);
        rootNavigation.children.forEach(item => {
          md.push(`  * [${item.title}](${item.url})`);
        });
      }
    });
    return md.join('\n');
  }
}
