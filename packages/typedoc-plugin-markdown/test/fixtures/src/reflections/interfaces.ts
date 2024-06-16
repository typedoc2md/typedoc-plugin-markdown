/**
 * @module
 */

import { CallbacksOptions } from './classes';

/**
 * Comments for BasicInterface
 */
export interface BasicInterface {
  /**
   * Comments for prop
   */
  prop: string;

  /**
   * @deprecated
   *
   * This prop is deprecated
   *
   * @see
   *
   * Comments for some tag
   */
  deprecatedProp: string;

  /**
   * Comments for optional prop
   */
  optionalProp?: string;

  /**
   * Comments for functionProper
   * @param s Comment for param s
   */
  functionProp: (s: string) => boolean;

  /**
   * Comments for propReturningSignatureDeclaration
   */
  propReturningSignatureDeclaration?: () => string | boolean | number;

  /**
   * Comments for propReturningSignatureDeclarations
   */
  propReturningSignatureDeclarations: (() => any) &
    ((paramsA: any[] | true, paramsB?: any) => any) &
    ((paramsC: any) => any);

  /**
   * Comments for propReturningObjectDeclaration
   */
  propReturningObjectDeclaration: { a: boolean; b: string };

  /**
   * Comments for propReturningObjectDeclarations
   */
  propReturningObjectDeclarations: { a: boolean; b: string } & {
    c: boolean;
    d: string;
  };

  /**
   * Comments for propWithFunction
   */
  propWithFunction: (options: { a: boolean; b: string }) => boolean;

  /**
   * Comments for propWithProps
   */
  propWithProps: {
    /**
     * Comments for nestedPropA
     */
    nestedPropA: string;
    /**
     * Comments for nestedPropB
     */
    nestedPropB: boolean;
    /**
     * Comments for nestedPropC
     */
    nestedPropC: {
      /**
       * Comments for nestedPropCA
       */
      nestedPropCA: string;
    };
    /**
     * Comments for nestedPropD
     */
    nestedPropD: () => boolean;
    /**
     * Comments for callbacks
     */
    callbacks?: Partial<CallbacksOptions>;
  };
}

/**
 * Comments for InterfaceWithTypeParameters
 */
export interface InterfaceWithTypeParameters<A> {
  /**
   * Comments for prop
   */
  prop: A;
}

/**
 * Comments for ExtendedInterface
 */
export interface ExtendedInterface extends BasicInterface {
  extendedProp: string;
}

/**
 * Comments for IndexableInterface
 */
export interface IndexableInterface {
  [s: string]: string;
  prop: string;
}

export interface MultipleIndexableInterface {
  /**
   * First index signature
   */
  [key: string]: string;
  /**
   * Second index signature
   */
  [index: number]: string;
  /**
   * Prop
   */
  prop: string;
}
export interface CustomEventInterface<T> {
  detail: string;
  target: T;
}

export interface InterfaceWithEventProperties {
  /**
   * Description for prop someProp
   */
  someProp?: boolean;
  /**
   * Description for event someEvent
   * @eventProperty
   * @param eventParam Comments for param eventParam
   * @deprecated Deprectaed comments
   */
  someEvent?: (eventParam: CustomEventInterface<MouseEvent>) => void;

  /**
   * @eventProperty
   */
  anotherEvent: MouseEvent;
}

/**
 * Comments for InterfaceWithFlags
 */
export interface InterfaceWithFlags {
  /** @experimental */
  expermintalProp?: string;
  /** @internal */
  internalProp: string;
}

/**
 * Comments for interface
 * over two lines
 *
 * And some more comments
 *
 * @typeParam A This is a parameter.
 *
 * @typeParam B Comments for a parameter.
 * This sentence is on a soft new line.
 *
 * @typeParam C This is a parameter.
 *
 *  Documentation with a double line
 *
 * @typeParam D
 * <p>These are comments with paras</p>
 * <p>These are comments with paras</p>
 * Other comments
 * Comments with <p>paras</p>
 *
 * <p>These are comments with paras</p>
 */
export interface InterfaceWithComments<A, B, C, D> {
  /**
   * Some text.
   *
   * - list item
   * - list item
   * @deprecated This is a deprecated property
   *
   * @see https://example.com
   */
  propertyWithComments: string;
}
