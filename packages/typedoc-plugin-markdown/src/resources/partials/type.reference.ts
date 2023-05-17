import { ReferenceType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks } from '../../support/els';

export function referenceType(
  context: MarkdownThemeRenderContext,
  referenceType: ReferenceType,
): string {
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
        referenceType.externalUrl
          ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
          : backTicks(referenceType.name),
      );
    }
    if (referenceType.typeArguments && referenceType.typeArguments.length > 0) {
      reflection.push(
        `\\<${referenceType.typeArguments
          .map((typeArgument) => context.someType(typeArgument))
          .join(', ')}\\>`,
      );
    }
    return reflection.join('');
  }
  return referenceType.externalUrl
    ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
    : backTicks(referenceType.name);
}
