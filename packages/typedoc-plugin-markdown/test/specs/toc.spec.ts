import * as Handlebars from 'handlebars';
import { ProjectReflection, Reflection } from 'typedoc';

describe(`TOC:`, () => {
  let moduleReflection: Reflection;
  let classReflection: Reflection;

  describe(`(default)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['toc.ts']);
      moduleReflection = project;
      classReflection = project.getChildByName('SomeClass') as any;
    });

    test(`should display toc for module'`, () => {
      expect(
        global.compileHelper(Handlebars.helpers.toc, moduleReflection),
      ).toMatchSnapshot();
    });

    test(`should display toc for class'`, () => {
      expect(
        global.compileHelper(Handlebars.helpers.toc, classReflection),
      ).toMatchSnapshot();
    });
  });
  describe(`(hideInPageToc)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['toc.ts'], { hideInPageTOC: true });
      moduleReflection = (project as any).children[0];
      classReflection = project.getChildByName('SomeClass') as any;
    });

    test(`should not display toc for class'`, () => {
      expect(Handlebars.helpers.toc.call(classReflection)).toBeNull();
    });
  });
});
