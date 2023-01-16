// Class exaples from https://devdocs.io/typescript/2/classes

export class Point {
  // properties
  x: number;
  y: number;

  //constructors
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {}

  // methds
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

export class Base {
  k = 4;
}

// Super calls
export class Derived extends Base {
  constructor() {
    super();
  }
}

// Getters and setters
export class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

// Index signature
export class IndexableClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

// Extends
export class Animal {
  move() {
    console.log('Moving along!');
  }
}

export class Dog extends Animal {
  woof(times: number) {}
}
