import { backTicks, link } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { ReferenceType, ReflectionKind } from 'typedoc';

export function referenceType(
  this: MarkdownThemeContext,
  model: ReferenceType,
): string {
  if (model.reflection || (model.name && model.typeArguments)) {
    const reflection: string[] = [];
    const pageUrl = this.router.getFullUrl(this.page.model);
    const modelUrl =
      model.reflection && this.router.hasUrl(model.reflection)
        ? this.router.getFullUrl(model.reflection)
        : null;
    if (model.reflection && modelUrl && pageUrl !== modelUrl) {
      if (model.reflection.kind === ReflectionKind.TypeParameter) {
        reflection.push(backTicks(model.name));
      } else {
        reflection.push(
          link(backTicks(model.reflection.name), this.urlTo(model.reflection)),
        );
      }
    } else {
      if (model.externalUrl) {
        reflection.push(
          model.externalUrl
            ? link(backTicks(model.name), model.externalUrl)
            : backTicks(model.name),
        );
      } else {
        reflection.push(backTicks(model.name));
      }
    }
    if (model.typeArguments && model.typeArguments.length) {
      reflection.push(
        this.partials.typeArguments(model.typeArguments, {
          forceCollapse: true,
        }),
      );
    }
    return reflection.join('');
  }
  return model.externalUrl
    ? link(backTicks(model.name), model.externalUrl)
    : backTicks(model.name);
}
