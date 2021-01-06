import * as Handlebars from 'handlebars';
import { Reflection } from 'typedoc';

import { TestApp } from '../test-app';

describe(`TOC:`, () => {
  let testApp: TestApp;
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  beforeAll(() => {
    testApp = new TestApp(['breadcrumbs.ts']);
  });

  describe(`(default)`, () => {
    beforeAll(async () => {
      await testApp.bootstrap();
      moduleReflection = testApp.project.children[0];
      classReflection = testApp.project.findReflectionByName('Breadcrumbs');
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
    beforeAll(async () => {
      await testApp.bootstrap({ hideInPageTOC: true });
      moduleReflection = testApp.project.children[0];
      classReflection = testApp.project.findReflectionByName('Breadcrumbs');
    });

    test(`should not display toc for class'`, () => {
      expect(Handlebars.helpers.toc.call(classReflection)).toBeNull();
    });
  });
});
