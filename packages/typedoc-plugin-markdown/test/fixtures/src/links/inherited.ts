/**
 * - {@link Class2.prop2}
 * - {@link Interface2.prop2}
 *
 * @module
 */

import { Class1, type Interface1 } from './extended.js';

export class Class2 extends Class1 {
  /**
   * Comments for class 1 prop 2
   */
  prop2: string;
}

export interface Interface2 extends Interface1 {
  /**
   * Comments for interface 2 prop 2
   */
  prop2: string;
}
