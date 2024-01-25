import { NamedTupleMember } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

export function namedTupleType(
  context: MarkdownThemeRenderContext,
  member: NamedTupleMember,
): string {
  return context.partials.someType(member.element);
}
