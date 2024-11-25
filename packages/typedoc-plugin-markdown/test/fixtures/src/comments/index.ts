/**
 *
 * Comments form module comments
 *
 * > links
 *
 * Links using `{@link}` inline tags.
 *
 * - {@link CommentInterface} - Links to CommentInterface
 * - {@link CommentInterface.prop | Links to CommentInterface.prop}
 * - {@link CommentInterface.propb | Links to CommentInterface.propb}
 * - {@link CommentEnum.MemberB}
 * - {@link SameName:var}
 * - {@link SameName:interface}
 * - {@link SameName.prop}
 * - {@link prop:var}
 * - {@link _prop_with_underscore:var}
 * - {@link TypeWithGenerics}
 *
 * External links:
 *
 * - {@link https://www.google.com Google}
 * - {@linkcode https://www.google.com}
 *
 * Relative Links:
 *
 * - [Relative Document](../../PROJECT_DOC_1.md)
 * - [Relative Link](../../../groups/members/opts-1/index.md)
 *
 * Relative Image Links:
 *
 * <img src="../../media/logo.png" alt="Logo" />
 *
 * ![Logo](../../media/logo.svg)
 *
 * @module
 *
 * @see
 *
 * Comments for a tag
 *
 * @see Comments for tag written on same line
 *
 * ## Html And Jsx
 *
 * A <tag></tag> in comments
 *
 * A `<tag>` in backticks
 *
 * Another object `{ x: 1 }`.
 *
 * <div style={{backgroundColor: "#fff", padding: 16}}>
 *  <img style={{display: "block"}} height="48" width="48"/>
 * </div>
 *
 * Some random {{braces}}.
 *
 * ```
 * A <tag> in a code block
 * Some <p> html </p> inside codeblock
 * ```
 *
 * > codeBlocks
 *
 * ```css
 * .class {color:red}
 * ```
 *
 * ```html
 * <div>x</div> <tag>y</tag>
 * ```
 *
 * `single line <code> {block}`
 */

export interface CommentInterface {
  prop: string;
  propb: string;
}

export interface CommentInterfaceExtended extends CommentInterface {
  propc: string;
}

export enum CommentEnum {
  /**
   * Comment for Member
   *
   * Some <p> html </p> and <tag></tag>.
   *
   * @deprecated
   *
   * Deprecated member
   *
   * @see {@link SameName}
   */
  Member,
  MemberB,
}

export type TypeWithGenerics<C, D> = C | D;

export interface SameName {
  prop: string;
  propb: string;
}
export const SameName = true;
export const prop = true;
export const propb = true;
export const _prop_with_underscore = true;

/**
 * Function with multiple example tags
 *
 * @example
 * // If there are no code blocks, TypeDoc assumes the whole tag
 * // should be a code block. This is not valid TSDoc, but is recognized
 * // by VSCode and enables better JSDoc support.
 *
 * factorial(1)
 *
 * @example
 * If there is a code block, then both TypeDoc and VSCode will treat
 * text outside of the code block as regular text.
 *
 * ```ts
 * factorial(1)
 * ```
 */
export function multipleExampleTags() {
  return true;
}

/**
 * Function with single example tag
 *
 * @example
 * If there is a code block, then both TypeDoc and VSCode will treat
 * text outside of the code block as regular text.
 *
 * ```ts
 * factorial(1)
 * ```
 *
 * @returns Return comments
 */
export function singleExampleTag() {
  return true;
}

/**
 * constFunction comments
 *
 * @param text Some param
 *
 * @remarks Some remarks
 */
export const constFunction = (text: string) => {
  return true;
};

/**
 * constFunctionWithReturns comments
 *
 * @param text Some param
 *
 * @returns Return comments
 *
 * @remarks Some remarks
 */
export const constFunctionWithReturns = (text: string) => {
  return true;
};

export class BaseClassProperties {
  /**
   * @deprecated
   */
  propA!: string;
  propB!: string;
}

export class ClassPropertiesTable extends BaseClassProperties {
  /**
   * Experimental flag comments
   *
   * @experimental
   */
  propWithFlag!: string;

  propA = 'propAValue';
  /**
   * The subroutine recursively parsed the hexadecimal data.
   * to generate the binary output for input validation.
   */
  private prop1!: boolean;
  /**
   * Below is a breakdown of the notable performances:
   *
   * - The CPU executed the instruction set in parallel with the GPU computations.
   * - The RAM efficiently cached the frequently accessed data for faster retrieval.
   * - The SSD accessed the stored files with lightning speed due to its high read/write capabilities.
   */
  readonly prop2!: RegExp;
  /**
   * > Example of Triple Code Block
   *
   * ```ts
   * def greet(name):
   * print("Hello, " + name + "!")
   * ```
   */
  prop3?: string;
}

export interface BaseInterfaceProperties {
  /**
   * @deprecated
   */
  propA: string;
  propB: string;
}

export interface InterfacePropertiesTable extends BaseInterfaceProperties {
  /**
   * The subroutine recursively parsed the hexadecimal data.
   * to generate the binary output for input validation.
   */
  prop1: boolean;
  /**
   * Below is a breakdown of the notable performances:
   *
   * - The CPU executed the instruction set in parallel with the GPU computations.
   * - The RAM efficiently cached the frequently accessed data for faster retrieval.
   * - The SSD accessed the stored files with lightning speed due to its high read/write capabilities.
   */
  prop2: RegExp;
  /**
   * > Example of Triple Code Block
   *
   * ```ts
   * def greet(name):
   * print("Hello, " + name + "!")
   * ```
   */
  prop3?: string;
  prop4: {
    a: string;
    b: string;
  };
}

export type TypeDeclarationTable = {
  /**
   * The subroutine recursively parsed the hexadecimal data.
   * to generate the binary output for input validation.
   */
  declaration1: boolean;
  /**
   * The subroutine recursively parsed the hexadecimal data.
   * to generate the binary output for input validation.
   */
  declaration2: boolean;
  declaration4: 100;
};

export const TypeDeclarationTable = {
  declaration1: 'declaration3',
  declaration2: 100,
};

/**
 * Adds two numbers together.
 *
 * @typeParam T The type of the numbers to be added.
 *
 * @param param1 The first param
 * to be added.
 * @param param2 The second param to be added.
 *
 * Some additional text for num2.
 *
 * @param param3 The third param to be added.
 *
 *
 */
export function parametersTable<T = string>(
  param1: number,
  param2: number,
  param3 = 4,
) {
  return param1 + param2 + param3;
}

export enum EnumMembersTable {
  /**
   * The subroutine recursively parsed the hexadecimal data.
   */
  member1 = 'member1',
}

/**
 * Function with block tags summary
 *
 * @example
 * const x = 1;
 *
 * @see abc.com
 *
 * @remarks
 *
 * Other block tags
 */
export function functionWithBlockTags(x: string, y: string) {}

/**
 * Variable with block tags summary
 *
 * @example
 * const x = 1;
 *
 * @remarks
 *
 * Other block tags
 */
export type typeWithBlockTags = {
  x: string;
};
