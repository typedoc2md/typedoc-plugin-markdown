const stringWithDefaultValue = 'variable';
let undefinedNumber: number;

const objectLiteral = {
  valueZ: 'foo',
  /**
   * Comment for value Y
   */
  valueY: function () {
    return 'foo';
  },
  valueX: {
    valueZ: 'foo',
    valueY: (z: string) => {
      return { a: 'test', b: z };
    },
    valueA: [100, 200, 300],
  },
  /**
   * Comment for valueA
   */
  valueA: 100,
  valueB: true,
};

const objectLiteral2 = {
  valueA: () => {},
};

let typeLiteral: {
  /**
   * Comment for valueZ
   */
  valueZ: string;
  valueY: { (): string };
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

let typeLiteral2: {
  prop: string;
};
