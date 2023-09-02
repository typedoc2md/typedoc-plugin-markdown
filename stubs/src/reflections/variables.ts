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
  '<': '<foo>',
  '<foo>': 'foo',
  '\\n': 'foo',
  '|': 'foo',
  '~': 'foo',
  prop_with_underscore: 'foo',
  'prop|with|pipes': 'foo',
  _: 'foo',
  valueZ: '_foo_',
  valueY: function (unionParam: 'a' | 'b', _undercoreParam_: string) {
    return 'foo';
  },
  valueX: {
    valueZ: 'foo',
    valueY: (z: string) => {
      return { a: 'test', b: z };
    },
    valueA: [100, 200, 300],
  },
  valueA: 100,
  valueB: true,
};
