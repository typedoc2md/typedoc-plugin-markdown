import { ReferenceReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function referenceMember(
  context: MarkdownThemeRenderContext,
  props: ReferenceReflection,
): string {
  let referenced = props.tryGetTargetReflectionDeep();

  const reExportsText = context.text.getText('label.reExports');
  const renamesAndReExportsText = context.text.getText(
    'label.renamesAndReExports',
  );

  if (!referenced) {
    return `${reExportsText} ${props.name}`;
  }

  if (referenced?.kindOf(ReflectionKind.TypeLiteral) && referenced.parent) {
    referenced = referenced?.parent;
  }

  if (!referenced?.url) {
    return `${reExportsText} ${referenced.name}`;
  }

  if (props.name === referenced.name) {
    return `${reExportsText} ${context.partials.linkTo(
      referenced.name,
      referenced.url,
    )}`;
  }

  return `${renamesAndReExportsText} ${context.partials.linkTo(
    referenced.name,
    referenced.url,
  )}`;
}
