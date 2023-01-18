import { ReferenceType } from 'typedoc';
import { backTicks } from '../support/els';
import { escapeChars } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function referenceType(
  context: MarkdownThemeRenderContext,
  referenceType: ReferenceType,
) {
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
        escapeChars(
          `<${referenceType.typeArguments
            .map((typeArgument) => context.partials.someType(typeArgument))
            .join(', ')}>`,
          '<>',
        ),
      );
    }
    return reflection.join('');
  }
  return referenceType.externalUrl
    ? `[${backTicks(referenceType.name)}]( ${referenceType.externalUrl} )`
    : backTicks(referenceType.name);
}
