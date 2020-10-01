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
