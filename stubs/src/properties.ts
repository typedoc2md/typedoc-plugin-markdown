export interface InterfaceWithProperties {
  /**
   * Property comments
   */
  property: string;
  optionalProperty?: Partial<ClassWithProperties>;
}

export class ClassWithProperties {
  /**
   * Property comments with | pipes
   * and new line
   */
  propertyWithDefaultValue = 'string';
  optionalProperty?: string | boolean | null;
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
