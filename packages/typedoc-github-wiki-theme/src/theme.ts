import { PageEvent, Reflection } from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class GithubWikiTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new ThemeRenderContext(pageEvent, this.application.options);
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  override parseUrl(url: string) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }
}
