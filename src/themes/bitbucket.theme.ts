import { Reflection } from 'typedoc/dist/lib/models';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { MarkdownTheme } from './markdown.theme';

export class BitbucketTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath, options);
  }

  getAnchor(reflection: Reflection) {
    return `markdown-header-${MarkdownTheme.getAnchorRef(reflection)}`;
  }
}
