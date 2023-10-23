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

  if (!referenced) {
    return `Re-exports ${props.name}`;
  }

  if (referenced?.kindOf(ReflectionKind.TypeLiteral) && referenced.parent) {
    referenced = referenced?.parent;
  }

  if (!referenced?.url) {
    return `Re-exports ${referenced.name}`;
  }

  if (props.name === referenced.name) {
    return `Re-exports [${referenced.name}](${context.urlTo(referenced)})`;
  }

  return `Renames and re-exports [${referenced.name}](${context.urlTo(
    referenced,
  )})`;
}
