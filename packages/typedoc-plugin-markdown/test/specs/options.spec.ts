import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Options:`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  test(`should setup option helpers with default options'`, () => {
    testApp.bootstrap({});
    expect(
      Handlebars.helpers.ifShowNamedAnchors(TestApp.handlebarsOptionsStub),
    ).toBeFalsy();
    expect(
      Handlebars.helpers.ifShowBreadcrumbs(TestApp.handlebarsOptionsStub),
    ).toBeTruthy();
  });

  test(`should setup option helpers with options set to true'`, () => {
    testApp.bootstrap({
      namedAnchors: true,
      hideBreadcrumbs: true,
    });
    expect(
      Handlebars.helpers.ifShowNamedAnchors(TestApp.handlebarsOptionsStub),
    ).toBeTruthy();
    expect(
      Handlebars.helpers.ifShowBreadcrumbs(TestApp.handlebarsOptionsStub),
    ).toBeFalsy();
  });
});
