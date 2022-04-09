import * as Handlebars from 'handlebars';
import { Reflection } from 'typedoc';
import { TestApp } from '../test-app';

describe(`TOC:`, () => {
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  describe(`(default)`, () => {
    let testApp: TestApp;
    beforeAll(async () => {
      testApp = new TestApp(['toc.ts']);
      await testApp.bootstrap();
      moduleReflection = testApp.project;
      classReflection = testApp.project.findReflectionByName('SomeClass');
    });

    test(`should display toc for module'`, () => {
      expect(
        TestApp.compileHelper(Handlebars.helpers.toc, moduleReflection),
      ).toMatchSnapshot();
    });

    test(`should display toc for class'`, () => {
      expect(
        TestApp.compileHelper(Handlebars.helpers.toc, classReflection),
      ).toMatchSnapshot();
    });
  });
  describe(`(hideInPageToc)`, () => {
    let testApp: TestApp;
    beforeAll(async () => {
      testApp = new TestApp(['toc.ts']);
      await testApp.bootstrap({ hideInPageTOC: true });
      moduleReflection = testApp.project.children[0];
      classReflection = testApp.project.findReflectionByName('SomeClass');
    });

    test(`should not display toc for class'`, () => {
      expect(Handlebars.helpers.toc.call(classReflection)).toBeNull();
    });
  });
});
