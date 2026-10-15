import { backTicks, link } from '@plugin/libs/markdown/index.js';
import { removeLineBreaks } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ArrayType, ReferenceType, SignatureReflection } from 'typedoc';

export function typeAndParent(
  this: MarkdownThemeContext,
  model: ArrayType | ReferenceType,
): string {
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
  // A reference that cannot be linked is named after its source text, which
  // can span lines (e.g. type arguments of an `extends` clause).
  return backTicks(
    removeLineBreaks(
      model
        .toString()
        .replace(/<\s*\n\s*/g, '<')
        .replace(/,?\s*\n\s*>/g, '>'),
    ),
  );
}
