import * as fs from 'fs';
import * as path from 'path';

import { BindOption, Renderer } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';
import {
  Component,
  ConverterComponent,
} from 'typedoc/dist/lib/converter/components';

import MarkdownTheme from './theme';

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
   * Overide default assets
   */
  onBegin() {
    Renderer.getDefaultTheme = () => path.join(__dirname, 'resources');
  }

  /**
   * Load markdown theme and perform additional checks
   */
  onResolveBegin() {
    const themeDir = path.join(__dirname);

    if (![themeDir, 'default', 'markdown'].includes(this.theme)) {
      // For custom themes check that the theme is a markdown theme
      // If it is return and pass through to renderer
      const themeFileName = path.resolve(path.join(this.theme, 'theme.js'));
      if (fs.existsSync(themeFileName) && this.isMarkdownTheme(themeFileName)) {
        return;
      }
      this.application.logger.warn(
        `[typedoc-plugin-markdown] '${this.theme}' is not a recognised markdown theme. If an html theme is required, please disable this plugin.`,
      );
    }

    // Set the default markdown theme
    this.application.options.setValue('theme', themeDir);
  }

  /**
   * Checks if the custom theme class is initiated from markdown theme
   */
  isMarkdownTheme(themeFileName: string) {
    try {
      const ThemeClass = require(themeFileName).default;
      return ThemeClass.prototype instanceof MarkdownTheme;
    } catch (e) {
      return false;
    }
  }
}
