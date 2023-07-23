/**
 * Comments for typeParams
 */
export class ClassWithTypeParams<T, V> {
  propT: T;
  propV: V;
  constructor(x: string) {}
}

export interface InterfaceWithTypeParams<T, V> {
  propT: T;
  propV: V;
}

export const functionWithTypeParam = <A>() => true;

/**
 *
 * @typeParam A Comment for type `A`
 * @typeParam B Comment for type `B`
 */
export const functionWithTypeParams = <
  A,
  B extends ClassWithTypeParams<string, number>,
  C = boolean | string,
  D = string,
>() => true;

export function genericsWithDefaults<Type extends boolean = boolean>() {
  return;
}

export function functionWithGenericConstraints<Type, Key extends keyof Type>(
  obj: Type,
  key: Key,
) {
  return obj[key];
}

export type Generic1<T> = Generic2<Generic3<T>>;
export type Generic2<T> = T;
export type Generic3<T> = T;

export type nestedGenerics = Generic1<Generic2<Generic3<string>>>;
