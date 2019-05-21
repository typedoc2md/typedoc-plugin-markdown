let isDone: boolean = false;

let decimal: number = 6;

let color: string = 'blue';

let list: number[] = [1, 2, 3];

let x: [string, number];

let notSure: any = 4;

function warnUser(): void {
  console.log('This is my warning message');
}

let u: undefined;
let n: null = null;

function error(message: string): never {
  throw new Error(message);
}
