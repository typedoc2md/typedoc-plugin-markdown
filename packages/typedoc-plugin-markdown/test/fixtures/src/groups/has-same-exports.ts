class ClassA {}
class ClassB {}

export { ClassA as SomeClass, ClassB as someClass };

/**
 * @group group1
 * @group group2
 */
export function someFunction() {}
