/**
 * - {@link SomInterface.valueContainer}
 * - {@link SomeTypeAlias.valueContainer}
 * - {@link SomeClass.valueContainer}
 * - {@link SomeClass.ValueContainer}
 * - {@link SomeEnum.ValueContainer}
 * - {@link someVariable.valueContainer}
 * - {@link ValueContainer}
 *
 * @module
 */

export interface SomInterface {
  valueContainer: string;
}

export type ValueContainer<V> = {
  value: V;
};

export type SomeTypeAlias<V> = {
  valueContainer: ValueContainer<V>;
};

export class SomeClass {
  valueContainer: string;

  ValueContainer() {
    return void 0;
  }
}

export enum SomeEnum {
  ValueContainer = 'valueContainer',
}

export const someVariable = {
  valueContainer: 'valueContainer',
};
