/**
 * Interfaces
 *
 * @module
 */

/**
 * Comments for Class Base
 */
export interface Base {
  /**
   * Comments for prop
   */
  prop: string;

  /**
   * Comments for optional prop
   */
  optionalProp?: string;

  /**
   * Comments for readonlyProp
   */
  readonly readonlyProp: string;

  /**
   * Comments for readonlyPropAndOptional
   */
  readonly readonlyPropAndOptional?: string;

  /**
   * Comments for functionProper {@link Base}
   * @param s Comment for param s {@link propWithProps}
   */
  functionProp: (s: string) => boolean;

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
      /**
       * Comments for nestedPropCB
       */
      nestedPropCB: boolean;
    };
    /**
     * Comments for nestedPropD
     */
    nestedPropD: () => boolean;
  };
}

export interface IndexableInterface {
  [s: string]: string;
}

export interface FunctionInterface {
  (source: string, subString: string): boolean;
}
