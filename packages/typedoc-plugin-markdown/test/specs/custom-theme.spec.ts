import * as path from 'path';

import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`CustomTheme:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
    const customThemePath = path.resolve(
      __dirname,
      '..',
      'stubs',
      'custom-theme',
    );
    testApp.bootstrap({
      theme: customThemePath,
    });
  });

  test(`should set 'ifShowIndex' to true on modules if navigation enabled`, () => {
    expect(
      Handlebars.helpers.ifShowIndex.call(
        testApp.project.children,
        TestApp.handlebarsOptionsStub,
      ),
    ).toBeTruthy();
  });

  test(`should set 'ifShowIndex' to false on classes if navigation enabled`, () => {
    const reflection = testApp.findReflection('Breadcrumbs');
    expect(
      Handlebars.helpers.ifShowIndex.call(
        reflection,
        TestApp.handlebarsOptionsStub,
      ),
    ).toBeFalsy();
  });

  test(`should set 'ifShowReflectionPath' to true if navigation enabled`, () => {
    const reflection = testApp.findReflection('Breadcrumbs');
    expect(
      Handlebars.helpers.ifShowReflectionPath.call(
        reflection,
        TestApp.handlebarsOptionsStub,
      ),
    ).toBeTruthy();
  });

  test(`should set 'ifShowReflectionTitle' to false if hideReflectionTitle is true`, () => {
    const reflection = testApp.findReflection('Breadcrumbs');
    expect(
      Handlebars.helpers.ifShowReflectionTitle.call(
        reflection,
        TestApp.handlebarsOptionsStub,
      ),
    ).toBeFalsy();
  });
});
