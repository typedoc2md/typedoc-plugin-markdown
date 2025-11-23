/**
 * @tagOne 0
 *
 * @tagTwo
 *
 * 'Frontmatter' tag
 *
 */
export interface SomeInterface {}

/**
 * @tagOne Tag value
 */
export const someFunction = () => {};

/**
 * Comments for overload function A
 */
export function someFunctionWithMultipleSignatures(name: string): string;
/**
 * Comments for overload function B
 */
export function someFunctionWithMultipleSignatures(
  firstName: string,
  lastName: string,
): string;
/**
 * Comments for greet function
 *
 * @tagOne Tag value
 */
export function someFunctionWithMultipleSignatures(
  firstNameOrName: string,
  lastName?: string,
): string {
  if (lastName) {
    return `Hello, ${firstNameOrName} ${lastName}`;
  }
  return `Hello, ${firstNameOrName}`;
}

console.log(someFunctionWithMultipleSignatures('John'));
