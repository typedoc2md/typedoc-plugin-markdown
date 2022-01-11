import { MarkdownThemeContext } from 'typedoc-plugin-markdown';

export class GitlabWikiThemeContext extends MarkdownThemeContext {
  relativeURL(url: string | undefined) {
    if (!url) {
      return '';
    }
    const relativeUrl = super.relativeURL(url);
    relativeUrl?.replace(/(.*).md/, '$1').replace(/ /g, '-');
    return relativeUrl?.startsWith('..') ? relativeUrl : './' + relativeUrl;
  }
}
