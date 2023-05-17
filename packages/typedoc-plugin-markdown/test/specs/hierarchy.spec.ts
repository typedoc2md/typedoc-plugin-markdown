import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/render-context';

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
      context.hierarchy((reflection as any).typeHierarchy),
    ).toMatchSnapshot();
  });

  test(`should compile nested type hierarchy`, () => {
    const reflection = project.getChildByName('ChildClassA');
    expect(
      context.hierarchy((reflection as any).typeHierarchy),
    ).toMatchSnapshot();
  });
});
