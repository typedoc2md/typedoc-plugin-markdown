import { backTicks, link } from '@theme/lib/markdown';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { ReferenceType } from 'typedoc';

/**
 * @category Type Partials
 */
export function referenceType(
  context: MarkdownThemeRenderContext,
  model: ReferenceType,
): string {
  if (model.reflection || (model.name && model.typeArguments)) {
    const reflection: string[] = [];

    if (model.reflection?.url) {
      reflection.push(
        link(
          backTicks(model.reflection.name),
          context.helpers.getRelativeUrl(model.reflection.url),
        ),
      );
    } else {
      reflection.push(
        model.externalUrl
          ? link(
              backTicks(model.name),
              context.helpers.getRelativeUrl(model.externalUrl),
            )
          : backTicks(model.name),
      );
    }
    if (model.typeArguments && model.typeArguments.length) {
      reflection.push(context.partials.typeArguments(model.typeArguments));
    }
    return reflection.join('');
  }
  return model.externalUrl
    ? `[${backTicks(model.name)}]( ${model.externalUrl} )`
    : backTicks(model.name);
}
