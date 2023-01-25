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
