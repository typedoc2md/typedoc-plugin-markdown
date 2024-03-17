export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return function (x: T): T {
    return fns.reduce((v: T, f: (arg: T) => T) => f(v), x);
  };
}
