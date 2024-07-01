export interface InterfaceWithChars<T> {
  prop: T;
  '>': string;
  '<': string;
  '<tag>': string;
}

export class ClassWithChars<T> {
  prop: T;
}

export const variableWithChars = {
  ['<x>']: '>',
  ['<y>']: '<',
  ['<z>']: '<tag>',
};
