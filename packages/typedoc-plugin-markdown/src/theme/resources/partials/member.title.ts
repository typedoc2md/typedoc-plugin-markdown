import { DeclarationReflection, ReflectionKind } from 'typedoc';
import { backTicks } from '../../../support/elements';
import { escapeChars } from '../../../support/utils';
import { MarkdownThemeRenderContext } from '../../definition/markdown-theme-render-context';

/**
 * @category Partials
 */
export function memberTitle(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
  typeParams = false,
): string {
  const md: string[] = [];

  if (hasKindTag(context, reflection)) {
    md.push(`${ReflectionKind.singularString(reflection.kind)}: `);
  }

  md.push(`${escapeChars(reflection.name)}`);

  if (reflection.signatures?.length) {
    md.push('()');
  }

  if (typeParams && reflection.typeParameters) {
    const typeParameters = reflection.typeParameters
      .map((typeParameter) => typeParameter.name)
      .join(', ');
    md.push(`${backTicks(`<${typeParameters}>`)}`);
  }

  return md.join('');
}

function hasKindTag(
  context: MarkdownThemeRenderContext,
  reflection: DeclarationReflection,
) {
  if (context.options.getValue('hideKindPrefix')) {
    return false;
  }
  if (
    reflection.hasOwnDocument &&
    !reflection.kindOf([ReflectionKind.Module, ReflectionKind.Namespace])
  ) {
    return true;
  }
  return (
    context.options.getValue('excludeGroups') &&
    reflection.kindOf([
      ReflectionKind.Function,
      ReflectionKind.Class,
      ReflectionKind.Interface,
      ReflectionKind.Variable,
      ReflectionKind.TypeAlias,
      ReflectionKind.Enum,
    ])
  );
}
