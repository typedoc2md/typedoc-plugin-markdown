import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`ContextAwareHelpers:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  describe(`(defaults)`, () => {
    beforeAll(async () => {
      await testApp.bootstrap({});
    });

    test(`should set 'ifShowNamedAnchors' to 'false' by default`, () => {
      expect(
        Handlebars.helpers.ifShowNamedAnchors(TestApp.handlebarsOptionsStub),
      ).toBeFalsy();
    });

    test(`should set 'ifShowBreadcrumbs' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowBreadcrumbs(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should set 'ifShowProjectName' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowProjectName(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should set 'ifShowReflectionTitle' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowReflectionTitle(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should set 'ifShowReflectionPath' to 'false' by default`, () => {
      expect(
        Handlebars.helpers.ifShowReflectionPath(TestApp.handlebarsOptionsStub),
      ).toBeFalsy();
    });

    test(`should set 'ifShowIndex' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowIndex(TestApp.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should compile relativeURL helper`, () => {
      const url = testApp.findReflection('Breadcrumbs').url;
      expect(Handlebars.helpers.relativeURL(url)).toMatchSnapshot();
    });
  });

  describe(`(with plugin options)`, () => {
    beforeAll(async () => {
      await testApp.bootstrap({
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
