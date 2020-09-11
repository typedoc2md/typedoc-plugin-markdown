import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class BitbucketTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
  }
  toAnchorRef(reflectionId: string) {
    return 'markdown-header-' + reflectionId;
  }
}
