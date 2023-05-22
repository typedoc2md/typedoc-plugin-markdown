import { ReferenceReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function referenceMember(
  context: MarkdownThemeRenderContext,
  props: ReferenceReflection,
): string {
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
