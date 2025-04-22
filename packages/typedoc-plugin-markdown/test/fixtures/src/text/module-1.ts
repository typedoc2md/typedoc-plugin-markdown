/**
 * @group SomeGroup
 */
export type SomeType = boolean;
export const someVar = true;

/**
 * @group SomeOtherGroup
 */
export type SomeOtherType = boolean;
export const someOtherVar = true;
export interface SomeInterface {
  /**
   * Description for prop someProp
   */
  someProp?: boolean;
  /**
   * @eventProperty
   */
  someEvent: MouseEvent;
}
