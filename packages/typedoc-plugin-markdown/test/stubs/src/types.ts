let stringType: string;

const stringLiteralType = 'blue';

type unionType = 'ease-in' | 'ease-out' | 'ease-in-out';

let literalType: { a: string; b: number };

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
