import * as path from 'path';

import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { Converter } from 'typedoc/dist/lib/converter/converter';
import { Reflection } from 'typedoc/dist/lib/models/reflections/abstract';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { OptionsReadMode } from 'typedoc/dist/lib/utils/options';

import { MarkdownTheme } from './theme/';

/**
 * Markdown plugin component that exposes the MarkdownTheme to the application.
 */
@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {

  // listen to event on initialisation
  public initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
    });
    this.listenTo(this.application.renderer, {
      [PageEvent.END]: this.onPageEnd,
    });
  }

  /**
   * * Triggered when the converter begins converting a project.
   */
  private onBegin(context: Context, reflection: Reflection) {

    // renderer
    const renderer = this.application.renderer;

    // store options
    const options = this.application.options;
    options.read({}, OptionsReadMode.Prefetch);

    // assign the theme
    const themeName = options.getValue('theme');
    const themePath = this.getThemeDirectory();

    // apply the theme
    if (themeName === 'markdown') {
      const markdownTheme = new MarkdownTheme(renderer, themePath, options.getRawValues());
      renderer.theme = renderer.addComponent('theme', markdownTheme);
    } else {
      this.application.logger.log('To generate markdown please set option --theme markdown');
    }
  }

  /**
   * Triggered after a document has been rendered, just before it is written to disc.
   * Remove duplicate lines to tidy up output
   */
  private onPageEnd(page: PageEvent) {
    page.contents = page.contents.replace(/\n{3,}/g, '\n\n');
  }

  /**
   * Returns the theme directory
   */
  private getThemeDirectory() {
    return path.join(__dirname, './theme/');
  }

}
