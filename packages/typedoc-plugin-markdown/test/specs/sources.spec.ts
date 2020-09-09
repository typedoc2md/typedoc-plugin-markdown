import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Sources:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(() => {
    testApp = new TestApp(['sources.ts']);
    testApp.bootstrap();
    partial = TestApp.getPartial('member.sources');
  });

  test(`should display implementation of sources'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('SomeClass').findReflectionByName('prop'),
      ),
    ).toMatchSnapshot();
  });

  test(`should display inherited and overide sources'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('AnotherInterface').findReflectionByName('prop'),
      ),
    ).toMatchSnapshot();
  });
});
