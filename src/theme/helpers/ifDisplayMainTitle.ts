import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if index item should be displayed
 * @param item
 * @param opts
 */
export function ifDisplayMainTitle(item: any, opts: any) {
  if (ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK || item.model.displayReadme) {
    return opts.inverse(this);
  } else {
    return opts.fn(this);
  }
}
