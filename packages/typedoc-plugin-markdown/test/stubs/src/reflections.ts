/**
 * comments
 */
export class ReflectionClass {}

/**
 * Comments for typeParams
 * @typeparam T - Some type param
 * @typeparam V - Some other type param
 */
export interface ReflectionWithTypeParams<T, V> {
  propT: T;
  propV: V;
}

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
