import {
  DeclarationReflection,
  DocumentReflection,
  ReflectionCategory,
  ReflectionGroup,
} from 'typedoc';

export function getGroupIndex(group: ReflectionGroup | ReflectionCategory) {
  if (this.options.getValue('indexFormat') === 'table') {
    return this.helpers.getGroupIndexTable(
      group.children as DeclarationReflection[] | DocumentReflection[],
      group instanceof ReflectionGroup ? group.owningReflection?.kind : null,
    );
  }
  return this.helpers.getGroupIndexList(
    group.children as DeclarationReflection[] | DocumentReflection[],
  );
}
