// type params / implemented by / comments
/**
 * Comments
 */
interface TypeParamsInterface<T> {
  prop: T;
}

// callable
export interface CallableInterface {
  (): string;
}

// indexable
export interface IndexableInterface {
  [index: number]: string;
}

// implements
export class ParentClass implements TypeParamsInterface<string> {
  prop = 'hello world';
}

// extends
export class ChildClassA extends ParentClass {}
export class ChildClassB extends ParentClass {}
