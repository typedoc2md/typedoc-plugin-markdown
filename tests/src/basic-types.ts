/**
 * For programs to be useful, we need to be able to work with some of the simplest units of data:
 * numbers, strings, structures, boolean values, and the like.
 */

/**
 * This is a boolean type
 * ```
 * const isDone: boolean = false;
 * ```
 */
export const isDone: boolean = false;

/**
 * This is a number type
 * ```
 * const decimal: number = 6;
 * ```
 */
export const amount: number = 6;

/**
 * This is a string type
 * ```
 * const color: string = "blue";
 * ```
 */
export const color: string = 'blue';

/**
 * This is an array type
 * ```
 * const numbers: number[] = [1, 2, 3];
 * ```
 */
export const numbers: number[] = [1, 2, 3];

/**
 * This is an object with various types
 */
export const aMixedObject = {
    someFunction: () => {
        return 'hello';
    },
    someNumber: 10,
    someString: 'hello',
};

export type SomeOptions = {
    aFunction?: () => void,
};
