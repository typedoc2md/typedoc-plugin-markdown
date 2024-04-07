import { Application } from 'typedoc';
import { ClassWithTypeParameters } from './classes';

/**
 * Comments for PrimitiveType
 */
export type PrimitiveType = boolean;

/**
 * Comments for ArrayType
 */
export type ArrayType = string[];

/**
 * Comments for UnionType
 */
export type UnionType = string | boolean | { z: string };

/**
 * Comments for StringLiteralType
 */
export type StringLiteralType =
  | ' '
  | 'string'
  | 'string|with|pipes'
  | 'string`with`backticks'
  | '<foo>'
  | '*';

/**
 * Comments for TupleType
 */
export type TupleType = [string, number];

/**
 * Comments for IntersectionType
 */
export type IntersectionType = TupleType &
  ArrayType & {
    bar: number;
  };

/**
 * Comments for ConditionalType
 */
export type ConditionalType<T> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends boolean
      ? 'boolean'
      : T extends undefined
        ? 'undefined'
        : 'object';

/**
 * Comments for TypeWithTypeParams
 */
export type TypeWithTypeParams<T, R> = [T, R];

/**
 * Comments for ExternalReferenceType
 */
export type ExternalReferenceType = ClassWithTypeParameters<
  /**
   * comments for x
   */
  'x',
  /**
   * Comments for y
   */
  'y'
>;

/**
 * Comments for PartialMappedType
 */
export type PartialMappedType<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Comments for ReadonlyMapedType
 */
export type ReadonlyMappedType<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Comments for FunctionType
 */
export type FunctionType = (name: string, value: unknown) => void;

/**
 * Comments for TypeWithExternalSymbolLinkMapping
 */
export type TypeWithExternalSymbolLinkMapping = Application;

/**
 * Comments for LiteralType
 */
export type LiteralType = {
  /**
   * comment for x
   */
  x: string;
  /**
   * comment for y
   */
  y: {
    /**
     * comment for y.x
     */
    x: string;
    /**
     * comment for y.y
     */
    y: boolean | string;
    /**
     * comment for y.z
     */
    z: (x: string) => string;
  } /**
   * comment for z
   */;
  z: (x: string) => string;
  /**
   * Comments for someFunction
   * @param param
   */
  someFunction(param: string): Promise<any>;
  /**
   * Comments for accessorA getter
   */
  get accessorA(): Promise<string>;
  /**
   * Comments for accessorA setter
   */
  set accessorA(x);
  set accessorB(x: string);
  get accessorB();
};

export type ArrayOfStuff = { name: string; age: number }[];

/**
 * Comments for IndexAccessType
 */
export type IndexAccessType = ArrayOfStuff[number];

/**
 * Comments for promise type returning object
 */
export type PromiseTypeWithObject = Promise<{
  /**
   * comments for x
   */
  x: 1;
}>;

/**
 * Comments for promise type returning symbol
 */
export type PromiseTypeWithSymbol = Promise<IndexAccessType>;

export const someQuery = 1;

/**
 * Comments for query type
 */
export type QueryType = typeof someQuery;

/**
 * Union with template strings
 */
export type UnionTypeWithTemplateStrings =
  | `v${number}`
  | `v${number}.${number}`
  | `v${number}.${number}.${number}`;

/**
 * Comments for object with special characters
 */
export type __TypeDeclarationWithSpecialCharacters_<T, U> = {
  '?': T | U;
  '<': '<';
  '>': '>';
  '\n': '\n';
  '\\': '\\';
  '<foo>': '<foo>';
  '*': '*';
  '*foo*': '*foo*';
  '**foo**': '**foo**';
  _foo_: '_foo_';
  _x: (_param: T) => U;
  _: '_';
  '|': '|';
  '~': '~';
  '`': '`';
  '{prop-with-brackets}': '{prop-with-brackets}';
  _prop_with_underscore_: '_prop_with_underscore_';
  '|prop|with|pipes|': '|prop|with|pipes|';
  '`prop`with`backticks`': '`prop`with`backticks`';
};
