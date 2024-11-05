import { backTicks } from '@plugin/libs/markdown/index.js';
import { DeclarationReflection } from 'typedoc';

export function getPropertyDefaultValue(model: DeclarationReflection) {
  const defaultValueTag = model.comment?.blockTags?.find(
    (tag) => tag.tag === '@defaultValue',
  );
  if (defaultValueTag) {
    return defaultValueTag?.content.map((content) => content.text).join('');
  }
  return model.defaultValue && model.defaultValue !== '...'
    ? backTicks(model.defaultValue)
    : null;
}
