/**
 * @module
 */

/**
 * Comments for BasicInterface
 */
export interface BasicInterface {
  /**
   * Comments for prop
   */
  prop: string;

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
