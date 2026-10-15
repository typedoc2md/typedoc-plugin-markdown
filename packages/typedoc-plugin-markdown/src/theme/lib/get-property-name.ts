/**
 * The name of a property as it is written in TypeScript: quoted unless it is
 * an identifier, a number, or a symbol name such as `[dispose]`, so that
 * `"prop.with.dot": string` is not rendered as `prop.with.dot: string`.
 */
export function getPropertyName(name: string): string {
  return /^([A-Z_$][\w$]*|\d+|\[[^\]]+\])$/i.test(name)
    ? name
    : JSON.stringify(name);
}
