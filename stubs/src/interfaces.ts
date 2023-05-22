export interface CallableInterface {
  (): string;
}

export interface IndexableInterface {
  [index: number]: string;
}

export interface Animal {
  name?: string;
}

export interface Dog extends Animal {
  breed: string;
}

export interface SomeProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

export class Animal {}

/**
 * Some config
 *
 * @default []
 */
export interface SomeConfig extends SomeProps {
  /**
   * Comments
   */
  callbacks?: SomeProps & {
    authorized?: (params: { request: boolean; auth: string }) => string;
  };
}
