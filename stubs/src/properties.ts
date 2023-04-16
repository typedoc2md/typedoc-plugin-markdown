export interface InterfaceWithProperties {
  /**
   * Property comments
   */
  property: string;
  optionalProperty?: Partial<ClassWithProperties>;
}

export class ClassWithProperties {
  /**
   * Property comments
   */
  propertyWithDefaultValue = 'string';
  optionalProperty?: string;
  objectProperty: { a: string };
  private privateProperty: string;
  private _getterProp: string;
  protected protectedProperty: string;
  get getterProp() {
    return this._getterProp;
  }
  set setterProp(str: string) {
    this._getterProp = str;
  }
}
