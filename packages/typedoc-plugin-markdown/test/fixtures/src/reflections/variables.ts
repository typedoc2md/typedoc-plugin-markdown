/**
 * @module
 */

/**
 * A simple string variable
 */
export const stringVariable = 'stringConstWithDefaultValue';

/**
 * Comments for typeOperatorVariable
 */
export const typeOperatorVariable: unique symbol = Symbol.for('__type__');

/**
 * Comments for objectLiteralVariable
 */
export const objectLiteralVariable = {
  valueY: function (unionParam: 'a' | 'b', _undercoreParam_: string) {
    return 'foo';
  },
  valueX: {
    valueZ: 'foo',
    valueY: (z: string) => {
      return { a: 'test', b: z, c: { a: 1, b: 2 } };
    },
    valueA: [100, 200, 300],
  },
  valueA: 100,
  valueB: true,
};

const sym = Symbol();

/**
 * Comments variable with symbol
 */
export const objectWithSymbol = {
  /**
   * Comments for symbol
   */
  [sym]: 'value',
};
