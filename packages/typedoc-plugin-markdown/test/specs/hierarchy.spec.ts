import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Hierarchy:`, () => {
  let project: ProjectReflection;
  let helper: Handlebars.HelperDelegate;

  beforeAll(async () => {
    project = await global.bootstrap(['hierarchy.ts']);
    helper = Handlebars.helpers.hierarchy;
  });
  test(`should compile type hierarchy`, () => {
    const reflection = project.getChildByName('ParentClass');
    expect(
      global.compileHelper(helper, (reflection as any).typeHierarchy, 0),
    ).toMatchSnapshot();
  });

  test(`should compile nested type hierarchy`, () => {
    const reflection = project.getChildByName('ChildClassA');
    expect(
      global.compileHelper(helper, (reflection as any).typeHierarchy, 0),
    ).toMatchSnapshot();
  });
});
