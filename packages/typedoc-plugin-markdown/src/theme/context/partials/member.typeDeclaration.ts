import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { DeclarationReflection, ReflectionKind } from 'typedoc';

export function typeDeclaration(
  this: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: number; allowSource?: boolean },
): string {
  const md: string[] = [];

  if (
    options.allowSource !== false &&
    this.options.getValue('typeDeclarationFormat') === 'source'
  ) {
    md.push(this.partials.typeDeclarationSource(model));
  } else {
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
  }

  return md.join('\n\n');
}
