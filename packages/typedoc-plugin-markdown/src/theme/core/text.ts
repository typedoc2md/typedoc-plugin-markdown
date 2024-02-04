import { TextContentMappings } from '../../plugin';
import {
  PLURAL_KIND_KEY_MAP,
  SINGULAR_KIND_KEY_MAP,
  TEXT_MAPPING_DEFAULTS,
} from '../../plugin/options/text-mappings';
import { MarkdownTheme } from '../theme';

export const text = (theme: MarkdownTheme) => {
  const textMappings = {
    ...TEXT_MAPPING_DEFAULTS,
    ...(theme.application.options.getValue('textContentMappings') || {}),
  };
  return {
    getText: (key: keyof TextContentMappings) => {
      return textMappings[key];
    },
    getTextFromKindString: (kindString: string, isPlural = false) => {
      const key = isPlural
        ? (PLURAL_KIND_KEY_MAP[kindString] as keyof TextContentMappings)
        : (SINGULAR_KIND_KEY_MAP[kindString] as keyof TextContentMappings);
      return textMappings[key] || kindString;
    },
  };
};
