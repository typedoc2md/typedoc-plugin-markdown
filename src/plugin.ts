import * as path from 'path';
import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { BitbucketTheme } from './themes/bitbucket.theme';
import { DocusaurusTheme } from './themes/docusaurus.theme';
import { GitbookTheme } from './themes/gitbook.theme';
import { MarkdownTheme } from './themes/markdown.theme';
import { VuePressTheme } from './themes/vuepress.theme';

type ThemeInstance = MarkdownTheme | DocusaurusTheme | VuePressTheme | BitbucketTheme | GitbookTheme;

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
    });
  }

  onBegin() {
    const renderer = this.application.renderer;
    const options = this.application.options;
    const themeName = options.getValue('theme');
    const themePath = path.join(__dirname, './theme');

    const platform = options.getValue('platform');
    const theme = themeName === 'markdown' ? this.getTheme(platform, renderer, themePath, options) : null;

    if (theme) {
      renderer.theme = renderer.addComponent('theme', theme);
    }
  }

  getTheme(platform: string, renderer: Renderer, themePath: string, options: any): ThemeInstance {
    if (platform) {
      if (platform === 'gitbook') {
        return new GitbookTheme(renderer, themePath, options);
      }
      if (platform === 'docusaurus') {
        return new DocusaurusTheme(renderer, themePath, options);
      }
      if (platform === 'bitbucket') {
        return new BitbucketTheme(renderer, themePath, options);
      }
      if (platform === 'vuepress') {
        return new VuePressTheme(renderer, themePath, options);
      }
    }
    return new MarkdownTheme(renderer, themePath, options);
  }
}
