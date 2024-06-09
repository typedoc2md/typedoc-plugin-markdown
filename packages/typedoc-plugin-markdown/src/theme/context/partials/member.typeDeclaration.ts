import { MarkdownThemeContext } from 'theme';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

/**
 * @category Member Partials
 */
export function typeDeclaration(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number },
): string {
  const md: string[] = [];

  const shouldDisplayTable = () => {
    if (
      model.parent?.kind === ReflectionKind.Property &&
      this.helpers.useTableFormat('propertyMembers')
    ) {
      return true;
    }

    if (
      model.parent?.kind !== ReflectionKind.Property &&
      this.helpers.useTableFormat('typeDeclarations')
    ) {
      return true;
    }

    return false;
  };

  if (shouldDisplayTable()) {
    md.push(
      this.partials.typeDeclarationTable(model.children || [], {
        kind: model.parent?.kind,
      }),
    );
  } else {
    md.push(this.partials.typeDeclarationList(model.children || [], options));
  }

  return md.join('\n\n');
}
