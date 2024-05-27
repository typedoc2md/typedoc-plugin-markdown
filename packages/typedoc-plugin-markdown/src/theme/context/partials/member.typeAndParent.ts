import { backTicks, link } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ArrayType, ReferenceType, SignatureReflection } from 'typedoc';

/**
 * @category Member Partials
 */
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
    const refl =
      model.reflection instanceof SignatureReflection
        ? model.reflection.parent
        : model.reflection;
    const parent = refl?.parent;
    if (parent) {
      const resultWithParent: string[] = [];
      if (parent?.url) {
        resultWithParent.push(
          link(backTicks(parent.name), this.getRelativeUrl(parent.url)),
        );
      } else {
        resultWithParent.push(backTicks(parent?.name));
      }
      if (refl?.url) {
        resultWithParent.push(
          link(backTicks(refl.name), this.getRelativeUrl(refl.url)),
        );
      } else {
        resultWithParent.push(backTicks(refl?.name));
      }
      return resultWithParent.join('.');
    }
  }
  return backTicks(model.toString());
}
