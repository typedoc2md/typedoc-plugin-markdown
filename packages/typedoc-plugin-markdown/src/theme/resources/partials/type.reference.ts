import { ReferenceType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { backTicks } from '../markdown';

export function referenceType(
  context: MarkdownThemeRenderContext,
  referenceType: ReferenceType,
  foreCollpase = false,
): string {
  if (
    referenceType.reflection ||
    (referenceType.name && referenceType.typeArguments)
  ) {
    const reflection: string[] = [];

    if (referenceType.reflection?.url) {
      reflection.push(
        context.partials.linkTo(
          backTicks(referenceType.reflection.name),
          referenceType.reflection.url,
        ),
      );
    } else {
      reflection.push(
        referenceType.externalUrl
          ? context.partials.linkTo(
              backTicks(referenceType.name),
              referenceType.externalUrl,
            )
          : backTicks(referenceType.name),
      );
    }
    if (referenceType.typeArguments && referenceType.typeArguments.length) {
      reflection.push(
        context.partials.typeArguments(
          referenceType.typeArguments,
          foreCollpase,
        ),
      );
    }
    return reflection.join('');
  }
  return referenceType.externalUrl
    ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
    : backTicks(referenceType.name);
}
