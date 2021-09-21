import { MarkdownTheme } from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc';

export class BitbucketTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }
  toAnchorRef(reflectionId: string) {
    return 'markdown-header-' + reflectionId;
  }
}
