import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { Reflection, ReflectionKind } from 'typedoc';

export function useUniqueAnchor(
  this: MarkdownThemeContext,
  reflection: Reflection,
): boolean {
  if (this.options.getValue('useHTMLAnchors')) {
    return true;
  }

  if (reflection.kind === ReflectionKind.EnumMember) {
    return isTable(this.options.getValue('enumMembersFormat'));
  }
  if (reflection.kind === ReflectionKind.Property) {
    if (reflection.parent?.kind === ReflectionKind.Class) {
      return (
        isTable(this.options.getValue('propertiesFormat')) ||
        isTable(this.options.getValue('classPropertiesFormat'))
      );
    }
    if (reflection.parent?.kind === ReflectionKind.Interface) {
      return (
        isTable(this.options.getValue('propertiesFormat')) ||
        isTable(this.options.getValue('interfacePropertiesFormat'))
      );
    }
    if (
      reflection.parent?.kind === ReflectionKind.TypeLiteral ||
      reflection.parent?.kind === ReflectionKind.TypeAlias
    ) {
      return (
        isTable(this.options.getValue('propertiesFormat')) ||
        isTable(this.options.getValue('typeDeclarationFormat'))
      );
    }
  }
  return false;
}

function isTable(key: string) {
  return key.toLowerCase().includes('table');
}
