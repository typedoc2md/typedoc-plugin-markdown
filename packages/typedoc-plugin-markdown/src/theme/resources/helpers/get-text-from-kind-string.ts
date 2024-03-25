import { TextContentMappings } from '@options/option-types';
import {
  PLURAL_KIND_KEY_MAP,
  SINGULAR_KIND_KEY_MAP,
} from '@options/text-mappings';
import { MarkdownThemeRenderContext } from '@theme/render-context';

export function getTextFromKindString(
  this: MarkdownThemeRenderContext,
  kindString: string,
  isPlural = false,
) {
  const key = isPlural
    ? (PLURAL_KIND_KEY_MAP[kindString] as keyof TextContentMappings)
    : (SINGULAR_KIND_KEY_MAP[kindString] as keyof TextContentMappings);
  return this.textContentMappings[key] || kindString;
}
