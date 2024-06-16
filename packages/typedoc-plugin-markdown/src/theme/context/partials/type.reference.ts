import { backTicks, link } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { ReferenceType } from 'typedoc';

export function referenceType(
  this: MarkdownThemeContext,
  model: ReferenceType,
): string {
  if (model.reflection || (model.name && model.typeArguments)) {
    const reflection: string[] = [];

    if (model.reflection?.url) {
      reflection.push(
        link(
          backTicks(model.reflection.name),
          this.getRelativeUrl(model.reflection.url),
        ),
      );
    } else {
      reflection.push(
        model.externalUrl
          ? link(backTicks(model.name), model.externalUrl)
          : backTicks(model.name),
      );
    }
    if (model.typeArguments && model.typeArguments.length) {
      reflection.push(this.partials.typeArguments(model.typeArguments));
    }
    return reflection.join('');
  }
  return model.externalUrl
    ? link(backTicks(model.name), model.externalUrl)
    : backTicks(model.name);
}
