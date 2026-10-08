/**
 * @module
 */

/** A box. */
export interface Box<Value> {
  /** The boxed value, a {@link Value}. */
  readonly value: Value;
}

/** A Box of strings. */
export interface StringBox extends Box<string> {}

/** A Type with a type-level Input property. */
export interface Type<Input> {
  /** The input. */
  readonly Input: Input;
}

/** A Type of numbers. */
export interface NumberType extends Type<number> {}
