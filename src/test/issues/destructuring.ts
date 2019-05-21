interface I {
  name: string;
}

/**
 * Some desc.
 * @param   value       Indexed value to search for.
 * @param   key         Param description
 * @param   fromIndex   The index etc.
 * @returns The first index of the element in the array; -1 if not found.
 */
function getIndex(value: any, { key = this.defaultField, fromIndex = 0 }: { key?: keyof I; fromIndex?: number } = {}): number {
  return 1;
}
