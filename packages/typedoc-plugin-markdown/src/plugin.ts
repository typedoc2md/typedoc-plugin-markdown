import * as path from 'path';

import { Renderer } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';

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
    const options = this.application.options;
    const theme = options.getValue('theme') as string;

    // messaging regarding refactored themes
    const messagePrefix = (theme: string) => {
      return `[typedoc-plugin-markdown] Please note the ${theme} theme is no longer supported in v3. `;
    };

    if (['docusaurus', 'docusaurus2'].includes(theme)) {
      this.application.logger.warn(messagePrefix('docusaurus') + 'Please use docusaurus-plugin-typedoc.');
    }
    if (theme === 'vuepress') {
      this.application.logger.warn(messagePrefix('vuepress') + 'Please use vuepress-plugin-typedoc.');
    }
    if (theme === 'bitbucket') {
      this.application.logger.warn(
        messagePrefix('bitbucket') + 'Please use --bitbucketCloudAnchors option to fix anchor links.',
      );
    }
    if (theme === 'gitbook') {
      this.application.logger.warn(messagePrefix('gitbook'));
    }

    const themes = ['default', 'markdown', 'docusaurus', 'docusaurus2', 'bitbucket', 'vuepress', 'gitbook'];

    // if the theme is 'default' or 'markdown' load the base markdown theme
    if (themes.includes(theme)) {
      options.setValue('theme', path.join(__dirname));
    }
  }
}
