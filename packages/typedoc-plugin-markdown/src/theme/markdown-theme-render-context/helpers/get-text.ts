import { TextContentMappings } from '@plugin/app/options';
import { MarkdownThemeRenderContext } from 'theme/markdown-theme-render-context';

export function getText(
  this: MarkdownThemeRenderContext,
  key: keyof TextContentMappings,
) {
  return this.textMappings[key];
}
