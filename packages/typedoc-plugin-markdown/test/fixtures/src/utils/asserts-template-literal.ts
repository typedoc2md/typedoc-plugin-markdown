export type Integrity = `sha512-${string}`;

export const isIntegrity = (i: unknown): i is Integrity =>
  typeof i === "string" && i.startsWith("sha512-");

export const asIntegrity = (i: unknown): Integrity => {
  if (!isIntegrity(i)) {
    throw new Error("not integrity");
  }
  return i;
};

export const assertIntegrity: (i: unknown) => asserts i is Integrity = (i) => {
  asIntegrity(i);
};

export type CustomString = string;

export const isString = (i: unknown): i is CustomString =>
  typeof i === "string";

export const asString = (i: unknown): CustomString => {
  if (!isString(i)) {
    throw new Error("not a custom string");
  }
  return i;
};

export const assertString: (i: unknown) => asserts i is CustomString = (i) => {
  asString(i);
};
