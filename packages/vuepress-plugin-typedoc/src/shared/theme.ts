import { Renderer } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { slugify } from './utils';

export class VuepressTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }
  toAnchorRef(reflectionId: string) {
    return slugify(reflectionId);
  }
}
