import { Comment, ProjectReflection } from 'typedoc';

import { MarkdownThemeRenderContext } from '../../src/theme-context';

describe(`Comments:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['comments.ts'], {
      includes: './test/stubs/inc',
      media: './test/stubs/media',
    }));
  });

  test(`should build @link references'`, () => {
    expect(
      context.partials.comment(
        project.getChildByName('commentWithDocLinks')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      context.partials.comment(
        project.getChildByName('commentsWithSymbolLinks')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with fenced block'`, () => {
    expect(
      context.partials.comment(
        project.getChildByName('commentsWithFencedBlock')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with tags'`, () => {
    expect(
      context.partials.comment(
        project.getChildByName('commentsWithTags')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should allow html in comments'`, () => {
    expect(
      context.partials.comment(
        project.getChildByName('commentsWithHTML')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });
});
