export interface CallableInterface {
  (): string;
}

export interface IndexableInterface {
  [index: number]: string;
}

export interface Animal {
  name?: string;
}

export interface Dog extends Animal {
  breed: string;
}

export interface SomeProps {
  prop1: string;
  prop2: string;
  prop3: string;
}
