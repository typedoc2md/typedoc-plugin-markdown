import * as Handlebars from 'handlebars';

import { TestApp, handlebarsOptionsStub } from '../../test/utils';

describe(`[component] OptionsComponent`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['variables']);
  });

  test(`should setup option helpers with default options'`, () => {
    testApp.bootstrap({});
    expect(
      Handlebars.helpers.ifShowNamedAnchors(handlebarsOptionsStub),
    ).toBeFalsy();
    expect(
      Handlebars.helpers.ifShowBreadcrumbs(handlebarsOptionsStub),
    ).toBeTruthy();
    expect(
      Handlebars.helpers.ifShowIndexes(handlebarsOptionsStub),
    ).toBeTruthy();
  });

  test(`should setup option helpers with options set to true'`, () => {
    testApp.bootstrap({
      namedAnchors: true,
      hideBreadcrumbs: true,
      hideIndexes: true,
    });
    expect(
      Handlebars.helpers.ifShowNamedAnchors(handlebarsOptionsStub),
    ).toBeTruthy();
    expect(
      Handlebars.helpers.ifShowBreadcrumbs(handlebarsOptionsStub),
    ).toBeFalsy();
    expect(Handlebars.helpers.ifShowIndexes(handlebarsOptionsStub)).toBeFalsy();
  });
});
