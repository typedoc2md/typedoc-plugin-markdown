type Delimiter = "·";

type Id =
  | `${"git"}${Delimiter}${string}${Delimiter}${string}`
  | `${"remote"}${Delimiter}${string}${Delimiter}${string}`;

export type LongIndexSignature = {
  [key: `${Id} ${string}`]: `${"dev" | "prod"} ${Id}`;
};
