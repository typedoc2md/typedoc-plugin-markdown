import { backTicks, codeBlock, link } from '@plugin/libs/markdown/index.js';
import { removeLineBreaks } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ArrayType, ReferenceType, SignatureReflection } from 'typedoc';

export function typeAndParent(
  this: MarkdownThemeContext,
  model: ArrayType | ReferenceType,
) {
  if (!model) {
    return backTicks('void');
  }

  if (model instanceof ArrayType) {
    return `${this.partials.typeAndParent(model.elementType as any)}[]`;
  }

  if (model instanceof ReferenceType && model.reflection) {
    const reflection =
      model.reflection instanceof SignatureReflection
        ? model.reflection.parent
        : model.reflection;
    const parent = reflection?.parent;
    if (parent) {
      const resultWithParent: string[] = [];
      if (this.router.hasUrl(parent)) {
        resultWithParent.push(link(backTicks(parent.name), this.urlTo(parent)));
      } else {
        resultWithParent.push(backTicks(parent?.name));
      }
      if (this.router.hasUrl(reflection)) {
        resultWithParent.push(
          link(backTicks(reflection.name), this.urlTo(reflection)),
        );
      } else {
        resultWithParent.push(backTicks(reflection?.name));
      }
      return resultWithParent.join('.');
    }
  }
  if (this.options.getValue('useCodeBlocks')) {
    return codeBlock(model.toString());
  }
  return backTicks(removeLineBreaks(model.toString()));
}
