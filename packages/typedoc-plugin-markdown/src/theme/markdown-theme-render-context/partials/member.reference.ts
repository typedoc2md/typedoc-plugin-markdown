import { link } from '@plugin/theme/lib/markdown';
import { ReferenceReflection, ReflectionKind } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders an reference member.
 *
 * @category Member Partials
 */
export function referenceMember(
  context: MarkdownThemeRenderContext,
  props: ReferenceReflection,
): string {
  let referenced = props.tryGetTargetReflectionDeep();

  const reExportsText = context.helpers.getText('label.reExports');
  const renamesAndReExportsText = context.helpers.getText(
    'label.renamesAndReExports',
  );

  if (!referenced) {
    return `${reExportsText} ${props.name}`;
  }

  if (referenced?.kind === ReflectionKind.TypeLiteral && referenced.parent) {
    referenced = referenced?.parent;
  }

  if (!referenced?.url) {
    return `${reExportsText} ${referenced.name}`;
  }

  if (props.name === referenced.name) {
    return `${reExportsText} ${link(
      referenced.name,
      context.helpers.getRelativeUrl(referenced.url),
    )}`;
  }

  return `${renamesAndReExportsText} ${link(
    referenced.name,
    context.helpers.getRelativeUrl(referenced.url),
  )}`;
}
