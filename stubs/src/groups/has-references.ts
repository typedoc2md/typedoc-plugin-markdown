/**
 * A module that contains references
 *
 * @module
 */

import { InterfaceA, InterfaceB } from './basic';

export function defaultFunction() {
  return '';
}

export { InterfaceA, InterfaceB as RenamedInterfaceB };

export default defaultFunction;
