import * as Handlebars from 'handlebars';
import { ProjectReflection, Reflection } from 'typedoc';

describe(`Breadcrumbs:`, () => {
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  describe(`(with readme)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['breadcrumbs.ts']);
      moduleReflection = (project.children as any)[0];
      classReflection = project.getChildByName('Breadcrumbs') as Reflection;
    });

    test(`should compile README breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: project,
          url: 'README.md',
        }),
      ).toMatchSnapshot();
    });

    test(`should compile entryPoint (globals) breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: project,
          url: 'globals.md',
        }),
      ).toMatchSnapshot();
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: moduleReflection,
          url: moduleReflection.url,
        }),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: classReflection,
          url: classReflection.url,
        }),
      ).toMatchSnapshot();
    });
  });
  describe(`(without readme)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['breadcrumbs.ts'], { readme: 'none' });
      moduleReflection = (project.children as any)[0];
      classReflection = project.getChildByName('Breadcrumbs') as Reflection;
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: moduleReflection,
          url: moduleReflection.url,
        }),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: project,
          model: classReflection,
          url: classReflection.url,
        }),
      ).toMatchSnapshot();
    });
  });
});
