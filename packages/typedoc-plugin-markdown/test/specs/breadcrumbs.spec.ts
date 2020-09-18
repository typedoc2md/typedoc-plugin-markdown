import * as Handlebars from 'handlebars';
import { Reflection } from 'typedoc';
import { TestApp } from '../test-app';

describe(`Breadcrumbs:`, () => {
  let testApp: TestApp;
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  describe(`(with readme)`, () => {
    beforeAll(() => {
      testApp.bootstrap();
      moduleReflection = testApp.findModule('breadcrumbs');
      classReflection = testApp.project.findReflectionByName('Breadcrumbs');
    });

    test(`should compile README breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: testApp.project,
          url: 'README.md',
        }),
      ).toMatchSnapshot();
    });

    test(`should compile entryPoint (globals) breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: testApp.findEntryPoint(),
          url: 'globals.md',
        }),
      ).toMatchSnapshot();
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: moduleReflection,
          url: moduleReflection.url,
        }),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: classReflection,
          url: classReflection.url,
        }),
      ).toMatchSnapshot();
    });
  });
  describe(`(without readme)`, () => {
    beforeAll(() => {
      testApp.bootstrap({ readme: 'none' });
      moduleReflection = testApp.findModule('breadcrumbs');
      classReflection = testApp.project.findReflectionByName('Breadcrumbs');
    });

    test(`should not compile entryPoint (globals) breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: testApp.findEntryPoint(),
          url: 'globals.md',
        }),
      ).toBeNull();
    });

    test(`should compile module breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: moduleReflection,
          url: moduleReflection.url,
        }),
      ).toMatchSnapshot();
    });
    test(`should compile class breadcrumbs'`, () => {
      expect(
        Handlebars.helpers.breadcrumbs.call({
          project: testApp.project,
          model: classReflection,
          url: classReflection.url,
        }),
      ).toMatchSnapshot();
    });
  });
});
