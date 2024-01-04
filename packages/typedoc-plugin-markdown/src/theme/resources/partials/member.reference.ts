import { ReferenceReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function referenceMember(
  context: MarkdownThemeRenderContext,
  props: ReferenceReflection,
): string {
  let referenced = props.tryGetTargetReflectionDeep();

  const reExportsText = context.getTextContent('label.reExports');
  const renamesAndReExportsText = context.getTextContent(
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
    return `${reExportsText} [${referenced.name}](${context.urlTo(
      referenced,
    )})`;
  }

  return `${renamesAndReExportsText} [${referenced.name}](${context.urlTo(
    referenced,
  )})`;
}
