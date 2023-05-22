import { NamedTupleMember } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../definition';

/**
 * @category Partials
 */
export function namedTupleType(
  context: MarkdownThemeRenderContext,
  member: NamedTupleMember,
): string {
  return context.someType(member.element);
}
