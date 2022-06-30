import { ReferenceType } from 'typedoc';
import { backTicks } from '../els';
import { MarkdownThemeRenderContext } from '../theme-context';

export function referenceType(
  context: MarkdownThemeRenderContext,
  referenceType: ReferenceType,
) {
  const externalUrl = context.attemptExternalResolution(referenceType);
  if (
    referenceType.reflection ||
    (referenceType.name && referenceType.typeArguments)
  ) {
    const reflection: string[] = [];

    if (referenceType.reflection?.url) {
      reflection.push(
        `[${backTicks(referenceType.reflection.name)}](${context.relativeURL(
          referenceType.reflection.url,
        )})`,
      );
    } else {
      reflection.push(
        externalUrl
          ? `[${backTicks(referenceType.name)}]( ${externalUrl} )`
          : backTicks(referenceType.name),
      );
    }
    if (referenceType.typeArguments && referenceType.typeArguments.length > 0) {
      reflection.push(
        `<${referenceType.typeArguments
          .map((typeArgument) => context.partials.someType(typeArgument))
          .join(', ')}\\>`,
      );
    }
    return reflection.join('');
  }
  return externalUrl
    ? `[${backTicks(referenceType.name)}]( ${externalUrl} )`
    : backTicks(referenceType.name);
}
