import * as path from 'path';

import * as fs from 'fs-extra';
import { Renderer } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';
import {
  Component,
  ConverterComponent,
} from 'typedoc/dist/lib/converter/components';

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_BEGIN]: this.onBegin,
      [Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin,
    });
  }

  /**
   * Overide the default assets for any custom themes to inherit
   */
  onBegin() {
    Renderer.getDefaultTheme = () => path.join(__dirname, 'resources');
  }

  /**
   * Read the theme option and load the paths of any recognised built in themes
   * Otherwise pass the path through to the Renderer
   */
  onResolveBegin() {
    const theme = this.application.options.getValue('theme') as string;

    // leagcy theme upgrade messages (can be removed in future)
    const legacyThemes = ['docusaurus', 'docusaurus2', 'vuepress', 'gitbook'];
    this.legacyMessages(legacyThemes, theme);

    // if the theme is 'default' or 'markdown' load the base markdown theme
    const markdownThemes = ['default', 'markdown'];
    if ([...markdownThemes, ...legacyThemes].includes(theme)) {
      this.setBaseTheme();
    }

    // check for other supported markdown themes
    if (theme === 'bitbucket') {
      this.setBitbucketTheme();
    }
  }

  // set default/base markdown theme
  setBaseTheme() {
    this.application.options.setValue('theme', path.join(__dirname));
  }

  // set 'bitbucket' theme
  setBitbucketTheme() {
    const bitbucketThemePath =
      path.dirname(require.resolve('typedoc-bitbucket-theme')) + '/dist';
    if (fs.existsSync(bitbucketThemePath)) {
      this.application.options.setValue('theme', bitbucketThemePath);
    } else {
      this.application.logger.warn(
        '[typedoc-plugin-markdown] Please npm install typedoc-bitbucket-theme to use the Bitbucket theme',
      );
    }
  }

  legacyMessages(legacyThemes: string[], theme: string) {
    if (legacyThemes.includes(theme)) {
      this.application.logger.warn(
        `[typedoc-plugin-markdown] Please note the ${theme} theme is no longer supported.`,
      );
    }
    if (theme.startsWith('docusaurus')) {
      this.application.logger.warn(
        `[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/docusaurus-plugin-typedoc`,
      );
    }
    if (theme === 'vuepress') {
      this.application.logger.warn(
        `[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/vuepress-plugin-typedoc`,
      );
    }
  }
}
