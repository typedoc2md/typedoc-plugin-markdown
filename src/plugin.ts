import * as path from 'path';
import { Renderer } from 'typedoc';
import { Context, Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Reflection, ReflectionKind } from 'typedoc/dist/lib/models/reflections/abstract';

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_BEGIN]: this.onBegin,
      [Converter.EVENT_RESOLVE_BEGIN]: this.onResolveBegin,
      [Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
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
    const theme = options.getValue('platform') || options.getValue('theme');

    // if the theme is 'default' or 'markdown' load the base markdown theme
    if (theme === 'default' || theme === 'markdown') {
      options.setValue('theme', path.join(__dirname));
    }

    // load any built in sub themes
    const subThemes = ['docusaurus', 'docusaurus2', 'vuepress', 'gitbook', 'bitbucket'];
    if (subThemes.includes(theme)) {
      options.setValue('theme', path.join(__dirname, 'subthemes', theme));
    }
  }

  /**
   * Trim quotation marks from module names.
   */
  private onDeclaration(context: Context, reflection: Reflection) {
    if (reflection.kindOf(ReflectionKind.Module)) {
        let name = reflection.name;
        name = name.replace(/"/g, '');
        reflection.name = name;
    }
  }
}
