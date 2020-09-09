/**
 * comments
 */
export class ReflectionClass {}

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
