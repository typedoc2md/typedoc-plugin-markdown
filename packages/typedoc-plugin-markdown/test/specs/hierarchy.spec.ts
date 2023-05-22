import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme/definition';

describe(`Hierarchy:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['hierarchy.ts'], {
      stubPartials: ['breadcrumbs', 'comment', 'members', 'sources', 'toc'],
    }));
  });
  test(`should compile type hierarchy`, () => {
    const reflection = project.getChildByName('ParentClass');
    expect(
      context.memberHierarchy((reflection as any).typeHierarchy, 2),
    ).toMatchSnapshot();
  });

  test(`should compile nested type hierarchy`, () => {
    const reflection = project.getChildByName('ChildClassA');
    expect(
      context.memberHierarchy((reflection as any).typeHierarchy, 2),
    ).toMatchSnapshot();
  });
});
