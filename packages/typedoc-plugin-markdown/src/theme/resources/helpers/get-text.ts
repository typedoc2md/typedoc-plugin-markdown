import { TextContentMappings } from '@options/option-types';
import { MarkdownThemeRenderContext } from '@theme/render-context';

export function getText(
  this: MarkdownThemeRenderContext,
  key: keyof TextContentMappings,
): string {
  return this.textContentMappings[key] as string;
}
