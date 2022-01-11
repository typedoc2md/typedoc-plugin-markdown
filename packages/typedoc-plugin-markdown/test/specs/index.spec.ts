import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Index:`, () => {
  let testApp: TestApp;
  let indexTemplate: Handlebars.TemplateDelegate;

  beforeAll(async () => {
    testApp = new TestApp(['reflections.ts']);
    await testApp.bootstrap();
    indexTemplate = TestApp.getTemplate('readme');
    TestApp.stubHelpers(['breadcrumbs']);
  });

  test(`should compile readme`, () => {
    expect(
      TestApp.compileTemplate(indexTemplate, {
        model: testApp.project,
        project: testApp.project,
      }),
    ).toMatchSnapshot();
  });
});
