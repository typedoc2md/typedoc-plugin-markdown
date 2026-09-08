/**
 * Exercises every plugin-specific `theme_*` string so the locale fixtures
 * assert the plugin's own translations and not just TypeDoc's.
 *
 * @module
 */

import { ReExportedInterface, RenamedInterface } from './re-exported.js';

export { ReExportedInterface, RenamedInterface as AliasedInterface };

/**
 * A class sharing a group with a function, so the index table headers a mixed
 * group with "Name" rather than with the single kind it holds.
 *
 * @group Mixed
 */
export class GroupedClass {}

/**
 * A function sharing a group with a class. Its single `@example` block is left
 * unmerged, so the heading comes from TypeDoc's `tag_example` rather than the
 * plugin's `tag_examples`.
 *
 * @group Mixed
 *
 * @example
 *
 * ```ts
 * groupedFunction();
 * ```
 */
export function groupedFunction(): void {}

/** A class that is extended by another. */
export class BaseClass {}

/** A class that extends another. */
export class ChildClass extends BaseClass {
  /** Description for a readonly property. */
  readonly readonlyProp: string = 'a readonly value';

  /**
   * @param paramA Description for a parameter.
   * @param paramB Description for a parameter with a default value.
   */
  someMethod(paramA: string, paramB: number = 1): void {}
}

/** An enum whose members carry values and descriptions. */
export enum SomeEnum {
  /** Description for an enum member. */
  MemberA = 'a',
  /** Description for another enum member. */
  MemberB = 'b',
}

/** An interface carrying an event property. */
export interface SomeInterface {
  /** Description for an optional property. */
  optionalProp?: string;

  /** @eventProperty */
  someEvent: MouseEvent;
}

/**
 * A union type alias. The per-member comments are what give the union element
 * summaries, without which the theme renders a plain signature instead.
 *
 * The plugin merges consecutive `@example` blocks into a synthetic `@examples`
 * tag, which is what its own `tag_examples` string translates.
 *
 * @example
 *
 * ```ts
 * const value: SomeUnion = 'a';
 * ```
 *
 * @example
 *
 * ```ts
 * const other: SomeUnion = { unionProp: 'b' };
 * ```
 */
export type SomeUnion =
  /**
   * Description for the first union member.
   */
  | string
  /**
   * Description for the second union member.
   */
  | {
      /**
       * Description for a union member property.
       */
      unionProp: string;
    };

/** A type alias with a defaulted type parameter. */
export type SomeGeneric<T = string> = {
  /** Description for a generic property. */
  genericProp: T;
};

/** A type alias declaring an object type. */
export type SomeObject = {
  /** Description for a declared property. */
  nameProp: string;
};
