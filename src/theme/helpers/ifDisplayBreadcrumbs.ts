import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

/**
 * Return true if breadcrumbs should be displayed
 * @param opts
 */
export function ifDisplayBreadcrumbs(opts: any) {
  return ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK ? opts.inverse(this) : opts.fn(this);
}
