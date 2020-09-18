let stringType: string;

const stringLiteralType = 'blue';

type unionType = 'ease-in' | 'ease-out' | 'ease-in-out';

let literalType: {
  valueZ: string;
  valueY: { (): string };
  valueX: {
    valueZ: string;
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
  valueA?: number;
  valueB?: boolean;
};

const objectLiteralType = {
  '<': '<foo>',
  '<foo>': 'foo',
  '\\n': 'foo',
  '|': 'foo',
  '`': 'foo',
  '~': 'foo',
  _: 'foo',
  valueZ: 'foo',
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
  valueA: 100,
  valueB: true,
};

let tupleType: [string, number];

class IntersectionClassA {}
class IntersectionClassB {}

type intersectionType = IntersectionClassA & IntersectionClassB;

const arrayType: string[] = ['Apple', 'Orange', 'Banana'];

export function restUntionTypes(
  arg: boolean[] | number,
  ...args: (string | number)[]
): any {
  return null;
}

function generic<T>(arg: T): T {
  return arg;
}

const functionReflectionType: <T>(arg: T) => T = generic;

export const typeOperatorType: unique symbol = Symbol.for('__type__');

export type objectLiteralUnionType = string | { z: string };
