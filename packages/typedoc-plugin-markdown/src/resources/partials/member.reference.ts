import { ReferenceReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../theme-render-context';

export function referenceMember(
  context: MarkdownThemeRenderContext,
  props: ReferenceReflection,
) {
  const referenced = props.tryGetTargetReflectionDeep();

  if (!referenced) {
    return `Re-exports ${props.name}`;
  }

  if (props.name === referenced.name) {
    return `Re-exports [${referenced.name}](${context.urlTo(referenced)})`;
  }

  return `Renames and re-exports [${referenced.name}](${context.urlTo(
    referenced,
  )})`;
}
