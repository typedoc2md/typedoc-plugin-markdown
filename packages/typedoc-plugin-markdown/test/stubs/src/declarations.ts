export const stringWithDefaultValueDeclaration = 'variable';
export let undefinedNumberDeclaration: number;

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

export const objectLiteralAsConstDeclaration = {
  /**
   * comments
   */
  Prop1: 'Prop1',
  /**
   * comments
   */
  Prop2: 'Prop1',
  /**
   * comments
   */
  Prop3: 'Prop1',
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
