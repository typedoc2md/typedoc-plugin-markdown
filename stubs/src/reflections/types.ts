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
export type ExternalReferenceType = ClassWithTypeParameters<'x', 'y'>;

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
   * Comment for valueZ
   */
  valueZ: string;
  valueY: { (): string };
  /**
   * Comment for valueX
   */
  valueX: {
    /**
     * Nested comment for valueX.valueZ
     */
    valueZ: string;
    /**
     * Nested comment for valueX.valueY
     */
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
  /**
   * Comments for valueA
   */
  valueA?: number;
  valueB?: boolean;
  get getMe(): Promise<string>;
  set setMe(x: string);
};
