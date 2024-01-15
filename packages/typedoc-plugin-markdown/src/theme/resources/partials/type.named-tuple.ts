import { NamedTupleMember } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * @category Partials
 */
export function namedTupleType(
  context: MarkdownThemeRenderContext,
  member: NamedTupleMember,
): string {
  return context.partials.someType(member.element);
}
