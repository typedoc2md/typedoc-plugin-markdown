import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Hierarchy:`, () => {
  let testApp: TestApp;
  let helper: Handlebars.HelperDelegate;

  beforeAll(() => {
    testApp = new TestApp(['hierarchy.ts']);
    testApp.bootstrap();
    helper = Handlebars.helpers.hierarchy;
  });
  test(`should compile type hierarchy`, () => {
    const reflection = testApp.findReflection('ParentClass');
    expect(
      TestApp.compileHelper(helper, reflection.typeHierarchy, 0),
    ).toMatchSnapshot();
  });

  test(`should compile nested type hierarchy`, () => {
    const reflection = testApp.findReflection('ChildClassA');
    expect(
      TestApp.compileHelper(helper, reflection.typeHierarchy, 0),
    ).toMatchSnapshot();
  });
});
