import * as Handlebars from 'handlebars';
import { DeclarationReflection } from 'typedoc';

import { TestApp } from '../test-app';

const getProp = (reflection: DeclarationReflection) => {
  const prop = reflection.findReflectionByName('prop');
  prop.sources = prop.sources.map((source) => {
    delete source.url;
    return source;
  });
  return prop;
};

describe(`Sources:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    testApp = new TestApp(['sources.ts']);
    await testApp.bootstrap();
    partial = TestApp.getPartial('member.sources');
  });

  test(`should display implementation of sources'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        getProp(testApp.findReflection('SomeClass')),
      ),
    ).toMatchSnapshot();
  });

  test(`should display inherited and overide sources'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        getProp(testApp.findReflection('AnotherInterface')),
      ),
    ).toMatchSnapshot();
  });
});
