/* tslint:disable */
/**
 * Destructuring objects.
 */
let { destructObjectA, destructObjectB, destructObjectC } = { destructObjectA: 0, destructObjectB: 'string', destructObjectC: 0 };

/**
 * Destructuring arrays.
 */
let [destructArrayA, destructArrayB, destructArrayC = 10] = [0, 'string', 0];

/**
 * Array Destructuring with rest
 */
let [destructArrayWithRestA, destructArrayWithRestB, ...destructArrayWithRest] = [1, 2, 3, 4];

/**
 * Array Destructuring with ignores
 */
let [destructArrayWithIgnoresA, , ...destructArrayWithIgnoresRest] = [1, 2, 3, 4];

/**
 * Destructuring function parameters.
 *
 * @param a This is a normal param
 * @param text This is the text
 * @param location This is the location
 * @param bold Should it be bold?
 */
function drawText(a, { n = true }, { text = '', location: [x, y] = [0, 0], bold = false }, b) {
  return 0;
}

export function dest({ a: b, b: c }: { a: string, b: number }): string {
  return 'x';
}
/* tslint:enable */
