import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Options:`, () => {
  describe(`(defaults)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['breadcrumbs.ts'], {});
    });

    test(`should set 'ifShowNamedAnchors' to 'false' by default`, () => {
      expect(
        Handlebars.helpers.ifShowNamedAnchors(global.handlebarsOptionsStub),
      ).toBeFalsy();
    });

    test(`should set 'ifShowBreadcrumbs' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowBreadcrumbs(global.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should set 'ifShowPageTitle' to 'true' by default`, () => {
      expect(
        Handlebars.helpers.ifShowPageTitle(global.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should compile relativeURL helper`, () => {
      const url = (project.getChildByName('Breadcrumbs') as any).url;
      expect(Handlebars.helpers.relativeURL(url)).toMatchSnapshot();
    });
  });

  describe(`(with plugin options)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['breadcrumbs.ts'], {
        publicPath: 'test-public-path',
        namedAnchors: true,
        hideBreadcrumbs: true,
        hidePageTitle: true,
      });
    });

    test(`should set named anchors to 'true'`, () => {
      expect(
        Handlebars.helpers.ifShowNamedAnchors(global.handlebarsOptionsStub),
      ).toBeTruthy();
    });

    test(`should set breadcrumbs to 'false'`, () => {
      expect(
        Handlebars.helpers.ifShowBreadcrumbs(global.handlebarsOptionsStub),
      ).toBeFalsy();
    });

    test(`should set page title to 'false'`, () => {
      expect(
        Handlebars.helpers.ifShowPageTitle(global.handlebarsOptionsStub),
      ).toBeFalsy();
    });

    test(`should compile relativeURL helper with public path`, () => {
      const url = (project.getChildByName('Breadcrumbs') as any).url;
      expect(Handlebars.helpers.relativeURL(url)).toMatchSnapshot();
    });
  });
});
