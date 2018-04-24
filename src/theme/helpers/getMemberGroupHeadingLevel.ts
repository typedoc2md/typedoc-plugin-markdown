import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

export function getMemberGroupHeadingLevel() {
  return ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK ? '#' : '##';
}
