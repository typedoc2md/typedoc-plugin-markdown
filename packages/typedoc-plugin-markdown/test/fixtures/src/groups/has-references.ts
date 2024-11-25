/**
 * A module that contains references
 *
 * @module
 */

import { InterfaceA, InterfaceB } from './basic.js';

export function defaultFunction() {
  return '';
}

export { InterfaceA, InterfaceB as RenamedInterfaceB };

export default defaultFunction;
