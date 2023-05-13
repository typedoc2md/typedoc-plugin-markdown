/**
 * comments
 */
export class ReflectionClass {}

export interface CallableReflection {
  (): string;
}

export interface IndexableReflection {
  [index: number]: string;
}

export enum EnumReflection {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export class ImplementedClass implements ReflectionClass {}

export class Duck {
  public age: Duck.Age;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Duck {
  export type Age = number;
}
