import { SomeProps } from './interfaces';

/**
 * String variable
 */
export let someString: string;

/**
 * Variable with default value
 */
export const stringWithDefaultValue = 'hello';

/**
 * Reference typed variable
 */
export let typedVariable: SomeProps;

/**
 * Reference typed variable with value
 */
export const referencedTyped: SomeProps = {
  prop1: 'Prop1',
  prop2: 'Prop2',
  prop3: 'Prop3',
};

/**
 * Untyped object variable
 */
export const untypedObject = {
  prop: 'foo',
};

/**
 * Variable with type declaration
 */
export let typeLiteral: {
  prop: string;
};

/**
 * Indexable variable
 */
export let indexable: {
  [index: number]: string;
  arg1: string;
};

/**
 * With special characters
 */
export let __specialCharacters__: string;

/**
 * An exported const of the custom array type.
 */
export const arrayValues: Array<number> = [1, 2];
