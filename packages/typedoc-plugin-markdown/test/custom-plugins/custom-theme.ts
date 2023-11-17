import { Application, PageEvent, Reflection } from 'typedoc';
import { MarkdownTheme, MarkdownThemeRenderContext } from '../../dist';

export function load(app: Application) {
  app.renderer.defineTheme('custom-theme', CustomTheme);
}

class CustomTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new ThemeRenderContext(pageEvent, this.application.options);
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  override footer = () => {
    return 'CUSTOM FOOTER HERE';
  };
}
