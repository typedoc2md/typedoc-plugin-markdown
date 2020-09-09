import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Breadcrumbs:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  test(`should compile breadcrumbs with readme'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(Handlebars.helpers.breadcrumbs, {
        project: testApp.project,
        model: testApp.project.findReflectionByName('Greeter'),
      }),
    ).toMatchSnapshot();
  });

  test(`should compile breadcrumbs without a readme'`, () => {
    testApp.bootstrap({ readme: 'none' });
    expect(
      TestApp.compileHelper(Handlebars.helpers.breadcrumbs, {
        project: testApp.project,
        model: testApp.project.findReflectionByName('Greeter'),
      }),
    ).toMatchSnapshot();
  });
});
