import { TextContentMappings } from '@plugin/app/options';
import {
  PLURAL_KIND_KEY_MAP,
  SINGULAR_KIND_KEY_MAP,
} from '@plugin/app/options/text-mappings';
import { MarkdownThemeRenderContext } from 'theme';

export function getTextFromKindString(
  this: MarkdownThemeRenderContext,
  kindString: string,
  isPlural = false,
) {
  const key = isPlural
    ? (PLURAL_KIND_KEY_MAP[kindString] as keyof TextContentMappings)
    : (SINGULAR_KIND_KEY_MAP[kindString] as keyof TextContentMappings);
  return this.textMappings[key] || kindString;
}
