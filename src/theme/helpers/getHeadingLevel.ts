import { MarkdownEngine } from '../enums/markdown-engine.enum';
import { ThemeService } from '../theme.service';

export function getHeadingLevel(baseLevel: string) {
  return ThemeService.getMarkdownEngine() === MarkdownEngine.GITBOOK ? baseLevel.substring(0, baseLevel.length - 1) : baseLevel;
}
