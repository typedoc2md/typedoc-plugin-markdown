import * as fs from 'fs';
import * as prettier from 'prettier';

export async function injectStringToFile(
  optionsIndexPath: string,
  replaceContent: string,
  anchorText: string,
  anchorTextEnd?: string,
) {
  const initialContent = fs.readFileSync(optionsIndexPath, 'utf8');
  const arr = initialContent.split('\n');
  const pluginOptionsIndex = arr.findIndex((line) => line.includes(anchorText));
  const index = pluginOptionsIndex + 1;
  const endIndex = anchorTextEnd
    ? arr.findIndex((line) => line.includes(anchorTextEnd))
    : undefined;

  const replaceAndTrim = <T>(
    arr: T[],
    startIndex: number,
    value: T,
    endIndex?: number,
  ) => {
    const i = startIndex < 0 ? arr.length + startIndex : startIndex;
    if (i < 0 || i >= arr.length) {
      throw new RangeError('startIndex out of range');
    }

    const e =
      endIndex === undefined
        ? arr.length
        : endIndex < 0
          ? arr.length + endIndex
          : endIndex;

    if (e < i) {
      throw new RangeError('endIndex must be >= startIndex');
    }
    if (e > arr.length) {
      throw new RangeError('endIndex out of range');
    }

    // Keep everything before `i`, insert the replacement, then keep everything after `e`
    return [...arr.slice(0, i), value, ...arr.slice(e)];
  };

  const out = replaceAndTrim(arr, index, replaceContent, endIndex).join('\n');

  const formattedOut = await prettier.format(out, {
    parser: 'mdx',
    singleQuote: true,
  });
  fs.writeFileSync(optionsIndexPath, formattedOut);
}
