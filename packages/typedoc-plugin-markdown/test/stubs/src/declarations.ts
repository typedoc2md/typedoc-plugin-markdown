export const stringWithDefaultValueDeclaration = 'variable';
export let undefinedNumberDeclaration: number;

/**
 * @param {Object} objectLiteralDeclaration description
 * @param {string} objectLiteralDeclaration.valueZ description for valuez
 * @param {number} objectLiteralDeclaration.valueA description for valuea
 */
export const objectLiteralDeclaration = {
  /**
   * Comment for valueZ
   */
  valueZ: 'foo',
  /**
   * Comment for value Y
   */
  valueY: function () {
    return 'foo';
  },
  /**
   * Comment for valueX
   */
  valueX: {
    valueZ: 'foo',
    valueA: [100, 200, 300],
  },
  /**
   * Comment for valueA
   */
  valueA: 100,
  valueB: true,
  valueC: {},
};

export const objectLiteral2Declaration = {
  valueA: () => {},
};

export let typeLiteralDeclaration: {
  /**
   * Comment for valueZ
   */
  valueZ: string;
  valueY: { (): string };
  /**
   * Comment for valueX
   */
  valueX: {
    /**
     * Nested comment for valueZ
     */
    valueZ: string;
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
  /**
   * Comments for valueA
   */
  valueA?: number;
  valueB?: boolean;
};

export let typeLiteralDeclarationWithFunction: {
  (): string;
  valueZ: string;
};

/**
 * Comments
 * @param {Object} objectLiteralAsConstDeclaration - Comment for object.
 * @param {string} objectLiteralAsConstDeclaration.Prop1 - Comment for Prop1.
 * @param {string} objectLiteralAsConstDeclaration.Prop2 - Comment for Prop2.
 */
export const objectLiteralAsConstDeclaration = {
  Prop1: 'Prop1',
  Prop2: 'Prop2',
  Prop3: 'Prop3',
} as const;

export const __DOUBLE_UNDERSCORES_DECLARATION__ = Symbol.for('__type__');

export type AnyFunctionType<A = any> = (...input: any[]) => A;

export type SpecialCharacters = {
  this_prop_has_underscores: number;
  'this|prop|has|the|pipe|character': string;
};

export enum EnumDeclarations {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export const fooBigInt = BigInt(100); // the BigInt function
export const barBigInt = 100n; // a BigInt literal
