import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Utils:`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  describe(`(default options)`, () => {
    beforeAll(() => {
      testApp.bootstrap({});
    });
    test(`should set named anchors to 'false' by default`, () => {
      expect(
        Handlebars.helpers.ifShowNamedAnchors(TestApp.handlebarsOptionsStub),
      ).toBeFalsy();
    });
    test(`should set breadcrumbs to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowBreadcrumbs(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });
    test(`should set project name to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowProjectName(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });
    test(`should compile relativeURL helper`, () => {
      const url = testApp.findReflection('Breadcrumbs').url;
      expect(Handlebars.helpers.relativeURL(url)).toMatchSnapshot();
    });
  });

  describe(`(set options)`, () => {
    beforeAll(() => {
      testApp.bootstrap({
        publicPath: 'test-public-path',
        namedAnchors: true,
        hideBreadcrumbs: true,
        hideProjectName: true,
      });
    });
    test(`should set named anchors to 'true'`, () => {
      expect(
        Handlebars.helpers.ifShowNamedAnchors(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });
    test(`should set breadcrumbs to 'false'`, () => {
      expect(
        Handlebars.helpers.ifShowBreadcrumbs(TestApp.handlebarsOptionsStub),
      ).toBeFalsy();
    });
    test(`should set project name to 'false'`, () => {
      expect(
        Handlebars.helpers.ifShowProjectName(TestApp.handlebarsOptionsStub),
      ).toBeFalsy();
    });
    test(`should compile relativeURL helper with public path`, () => {
      const url = testApp.findReflection('Breadcrumbs').url;
      expect(Handlebars.helpers.relativeURL(url)).toMatchSnapshot();
    });
  });
});
