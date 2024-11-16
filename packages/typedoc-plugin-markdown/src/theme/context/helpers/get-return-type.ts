import { codeBlock } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ReflectionType, SomeType } from 'typedoc';

export function getReturnType(this: MarkdownThemeContext, model?: SomeType) {
  if (model) {
    const returnType = this.partials.someType(model);
    if (
      this.options.getValue('useCodeBlocks') &&
      this.options.getValue('expandObjects') &&
      model instanceof ReflectionType
    ) {
      return codeBlock(returnType);
    }
    return returnType;
  }
  return '';
}
