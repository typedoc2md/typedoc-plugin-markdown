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
   * This prop is deprecte
   *
   * @someTag
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
