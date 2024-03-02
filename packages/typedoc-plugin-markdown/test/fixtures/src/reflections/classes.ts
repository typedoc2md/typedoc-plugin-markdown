/**
 * @module
 */

/**
 * Comments for BasicClass
 */
export class BasicClass {
  /**
   * Comments for prop1
   */
  someProp = 'someProp';
  /**
   *
   */
  objecLiteralProp = {
    /**
     * Comments for someFunction
     */
    someFunction: (a: string) => {
      return a;
    },
    /**
     * Comments for someProp
     */
    someProp: 'someProp',
  };
}

export abstract class AbstractClass {
  /**
   * Comments for abstractProp
   */
  abstract abstractProp: string;

  /**
   * Comments for abstractMethod
   */
  abstract abstractMethod(): string;
}

/**
 * Comments for DerivedClassA
 */
export class DerivedClassA extends AbstractClass {
  abstractProp = 'abstractProp';
  derivedProp: string;
  abstractMethod() {
    return 'abstractMethod';
  }
  derivedMethod() {
    return 'derivedMethod';
  }
}

/**
 * Comments for DerivedClassB
 */
export class DerivedClassB extends AbstractClass {
  abstractProp = 'abstractProp';
  abstractMethod() {
    return 'abstractMethod';
  }
}

/**
 * Comments for ClassWithConstructorOverloads
 */
export class ClassWithConstructorOverloads {
  /**
   *
   * @param x Comments for x number
   * @param y
   */
  constructor(x: number, y: string);
  /**
   *
   * @param x Comments for x string
   */
  constructor(x: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {}
}

/**
 * Comments for ClassWithTypeParameters
 *
 * @param A Comments for param A
 * @param B Comments for param B
 */
export class ClassWithTypeParameters<A, B extends string, C = boolean> {}

/**
 * Comments for ClassWithAccessors
 */
export class ClassWithAccessors {
  private privateProp: string;
  /**
   * Comments for getter
   */
  get accessor() {
    return this.privateProp;
  }

  /**
   * Comments for setter
   * @param value Param comments
   */
  set accessor(value: string) {
    this.privateProp = value;
  }

  get noSetter() {
    return 'x';
  }

  set noGetter(x: string) {}
}

/**
 * Comments for AbstractClass
 */

/**
 * Comments for ClassWithModifiers
 */
export abstract class ClassWithModifiers {
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
  publicPropWithDefault = 'propWithDefault';

  /**
   * Comment for publicMethod
   */
  publicMethod() {
    return this.privateMethod();
  }

  /**
   * Comment for privateMethod
   */
  private privateMethod() {}

  /**
   * Comment for staticMethod
   */
  static staticMethod() {}
}

export class DisposableClass implements Disposable {
  [Symbol.dispose]() {}
}

export class CallbacksOptions<P = DisposableClass, A = ClassWithModifiers> {}

/**
 * Comment for ClassWithFlags
 */
export class ClassWithFlags {
  /** @experimental */
  expermintalProp: string;
  /** @internal */
  private internalProp: string;
  /** @experimental */
  expermintalMethod() {}
  /**
   * @internal
   */
  protected internalMethod() {}
}
