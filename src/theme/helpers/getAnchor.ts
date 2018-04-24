import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

/**
 * Returns the anchor element
 * @param anchor
 */
export function getAnchor(anchor: string) {
  return ThemeService.getMarkdownEngine() === MarkdownEngine.BITBUCKET ? '' : `<a id="${anchor}"></a>`;
}
