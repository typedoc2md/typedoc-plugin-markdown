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
  protected protectedProperty: string;
}
