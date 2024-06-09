import { MarkdownThemeContext } from 'public-api';

export function useTableFormat(
  this: MarkdownThemeContext,
  key:
    | 'properties'
    | 'parameters'
    | 'enums'
    | 'typeDeclarations'
    | 'propertyMembers',
): boolean {
  if (key === 'parameters') {
    return isTable(this.options.getValue('parametersFormat'));
  }
  if (key === 'properties') {
    return isTable(this.options.getValue('propertiesFormat'));
  }
  if (key === 'enums') {
    return isTable(this.options.getValue('enumMembersFormat'));
  }
  if (key === 'propertyMembers') {
    return isTable(this.options.getValue('propertyMembersFormat'));
  }
  if (key === 'typeDeclarations') {
    return isTable(this.options.getValue('typeDeclarationFormat'));
  }
  return false;
}

function isTable(key: string) {
  return key.toLowerCase().includes('table');
}
