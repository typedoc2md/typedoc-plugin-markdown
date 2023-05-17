import { Comment, ProjectReflection } from 'typedoc';

import { MarkdownThemeRenderContext } from '../../src/render-context';

describe(`Comments:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['comments.ts'], {
      includes: './test/stubs/inc',
      media: './test/stubs/media',
    }));
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      context.comment(
        project.getChildByName('commentsWithSymbolLinks')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with fenced block'`, () => {
    expect(
      context.comment(
        project.getChildByName('commentsWithFencedBlock')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with tags'`, () => {
    expect(
      context.comment(
        project.getChildByName('commentsWithTags')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });

  test(`should escape angle brackets inside comments'`, () => {
    expect(
      context.comment(
        project.getChildByName('commentsWithMarkup')?.comment as Comment,
      ),
    ).toMatchSnapshot();
  });
});
