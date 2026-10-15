import { SomeType } from 'typedoc';

/**
 * Whether a type must be wrapped in parentheses when it is the operand of a
 * postfix such as `[]` or `?`, so that `(() => void)[]` is not rendered as
 * `() => void[]`, which reads as a function returning an array.
 */
export function needsParentheses(type: SomeType): boolean {
  switch (type.type) {
    case 'union':
    case 'intersection':
    case 'conditional':
    case 'typeOperator':
      return true;
    case 'reflection':
      // Rendered as a bare function type (see type.reflection.ts).
      return (
        type.declaration?.signatures?.length === 1 && !type.declaration.children
      );
    default:
      return false;
  }
}

/**
 * Whether a type must be wrapped in parentheses when it is a member of an
 * intersection, so that `A & (() => void)` is not rendered as
 * `A & () => void`, which is not valid TypeScript.
 */
export function needsParenthesesInIntersection(type: SomeType): boolean {
  switch (type.type) {
    case 'union':
    case 'conditional':
      return true;
    case 'reflection':
      // Rendered as a bare function or constructor type (see type.reflection.ts).
      return (
        type.declaration?.signatures?.length === 1 && !type.declaration.children
      );
    default:
      return false;
  }
}
