/**
 * This is the doc comment for file1.ts
 *
 * Specify this is a module comment and rename it to my-module.
 *
 * How many lines will it cover.
 *
 * @module
 */

/**
 * Comments for Class Base
 */
export abstract class Base {
  /**
   * Comments for abstractProp
   */
  abstract abstractProp: string;

  /**
   * Comments for staticProp
   */
  static staticProp: string;

  /**
   * Comments for privateProp
   */
  private privateProp: string;

  /**
   * Comments for abstractProperty
   */
  readonly readonlyProp: string;

  /**
   * Comments for protectedProp
   */
  protected protectedProp: string;

  /**
   * Comments for propWithDefault
   */
  public propWithDefault = 'propWithDefault';

  /**
   * Comments for getter
   */
  get getter() {
    return this.privateProp;
  }

  /**
   * Comments for setter
   * @param value Param comments
   */
  set setter(value: string) {
    this.privateProp = value;
  }

  /**
   * Constructor comments
   * @param a Param a comments
   */
  constructor(a: string);
  /**
   * Overload constructor comments
   * @param a Param a comments
   * @param b Param b comments
   */
  constructor(a: string, b?: number) {}

  /**
   * Comments for abstractMethod
   */
  abstract abstractMethod(): string;

  /**
   * Comment for publicMethod
   */
  publicMethod() {
    return this.privateMethod();
  }

  /**
   * Comment for publicMethod
   */
  private privateMethod() {}

  /**
   * Comment for publicMethod
   */
  static staticMethod() {}
}

/**
 * Comments for Class Derived
 */
export class Derived extends Base {
  abstractProp = 'abstractProp';

  derivedProp: string;

  abstractMethod() {
    return 'abstractMethod';
  }

  derivedMethod() {
    return 'derivedMethod';
  }
}
