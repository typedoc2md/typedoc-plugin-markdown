/**
 * Plugin definition
 */
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { Converter } from 'typedoc/dist/lib/converter/converter';
import { Reflection } from 'typedoc/dist/lib/models/reflections/abstract';
import { Options, OptionsReadMode } from 'typedoc/dist/lib/utils/options';
import { MarkdownTheme } from './theme/theme';

import * as path from 'path';

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {

  private isSinglePage: boolean;

  public initialize() {

    const options: Options = this.application.options;
    options.read({}, OptionsReadMode.Prefetch);
    this.isSinglePage = (options.getValue('markdownSinglePage'));

    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
    });
  }

  private getThemeDirectory() {
    return path.join(__dirname, '../dist/theme/');
  }

  private onBegin(context: Context, reflection: Reflection) {

    const renderer = this.application.renderer;
    const theme = this.application.options.getValue('theme');
    const themePath = this.getThemeDirectory();
    const options = { isSinglePage: this.isSinglePage };

    // apply the theme
    if (theme === 'markdown') {
      renderer.theme = renderer.addComponent('theme', new MarkdownTheme(this.application.renderer, themePath, options));
 } else {
      this.application.logger.log('To generate markdown please set option --theme markdown');
    }
  }

}
