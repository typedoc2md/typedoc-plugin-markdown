import { MarkdownThemeContext } from 'typedoc-plugin-markdown';
import * as path from 'path';

export class DocusaurusThemeContext extends MarkdownThemeContext {
  relativeURL(url: string | undefined) {
    const relativeUrl = super.relativeURL(url)?.replace(/.md/g, '');
    if (relativeUrl) {
      if (path.basename(relativeUrl).startsWith('index')) {
        return relativeUrl.replace('index', '');
      }
    }
    return relativeUrl;
  }
}
