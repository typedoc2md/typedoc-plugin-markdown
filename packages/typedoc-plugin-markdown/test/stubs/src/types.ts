let stringType: string;

const stringLiteralType = 'blue';

type unionType = 'ease-in' | 'ease-out' | 'ease-in-out';

let literalType: { a: string; b: number };

let tupleType: [string, number];

class IntersectionClassA {}
class IntersectionClassB {}

type intersectionType = IntersectionClassA & IntersectionClassB;

const arrayType: string[] = ['Apple', 'Orange', 'Banana'];
