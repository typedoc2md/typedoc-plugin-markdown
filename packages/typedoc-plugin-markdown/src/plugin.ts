import * as path from 'path';
import { BindOption, Renderer } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';
import {
  Component,
  ConverterComponent,
} from 'typedoc/dist/lib/converter/components';

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
  @BindOption('theme')
  theme!: string;

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
    // legacy theme upgrade messages (can be removed in future)
    const legacyThemes = [
      'bitbucket',
      'docusaurus',
      'docusaurus2',
      'vuepress',
      'gitbook',
    ];
    this.legacyMessages(legacyThemes, this.theme);

    // load the base markdown theme
    const markdownThemes = ['default', 'markdown'];
    if ([...markdownThemes, ...legacyThemes].includes(this.theme)) {
      this.application.options.setValue('theme', path.join(__dirname));
    }
  }

  legacyMessages(legacyThemes: string[], theme: string) {
    if (legacyThemes.includes(theme)) {
      this.application.logger.warn(
        `[typedoc-plugin-markdown] Please note the ${theme} theme is no longer supported as of v3.0.0.`,
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
    if (theme === 'bitbucket') {
      this.application.logger.warn(
        '[typedoc-plugin-markdown] Please use https://www.npmjs.com/package/typedoc-bitbucket-theme',
      );
    }
  }
}
