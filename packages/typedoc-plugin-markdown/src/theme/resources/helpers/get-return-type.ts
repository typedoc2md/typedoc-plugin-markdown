import { codeBlock } from '@plugin/libs/markdown';
import { MarkdownThemeContext } from 'public-api';
import { ReflectionType, SomeType } from 'typedoc';

export function getReturnType(this: MarkdownThemeContext, model?: SomeType) {
  if (model) {
    const returnType = this.partials.someType(model);
    if (
      this.options.getValue('useCodeBlocks') &&
      model instanceof ReflectionType &&
      this.options.getValue('expandObjects')
    ) {
      return codeBlock(returnType);
    }
    return returnType;
  }
  return '';
}
