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

/**
 * Returns the {@link Item} it was given.
 */
export function identity<Item>(item: Item): Item {
  return item;
}

/** A mapper. */
export interface Mapper {
  /** Maps to a {@link Result}. */
  map<Result>(): Result;
}

/**
 * A default whose object type has a method returning an object, so the method
 * return and the sibling property must expand alike.
 */
export function create<
  Shape = { make(): { a: string }; prop: { b: string } },
>(): Shape {
  return undefined as Shape;
}
