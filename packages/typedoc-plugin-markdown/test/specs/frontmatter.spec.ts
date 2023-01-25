import { ProjectReflection } from 'typedoc';

import { MarkdownThemeRenderContext } from '../../src/theme-context';

describe(`Frontmatter:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  describe(`Default frontmatter`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['comments.ts']));
    });

    test(`should render default YAML block'`, () => {
      expect(
        context.partials.frontmatter({
          project: project,
          model: project,
          url: 'module.md',
        } as any),
      ).toMatchSnapshot();
    });
  });

  describe(`With options`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['comments.ts'], {
        options: {
          frontmatterTags: ['author', 'description'],
          frontmatterGlobals: { globalA: 'globalA', globalB: 2, globalC: null },
        },
      }));
    });

    test(`should render YAML block with options'`, () => {
      expect(
        context.partials.frontmatter({
          project: project,
          model: project,
          url: 'module.md',
        } as any),
      ).toMatchSnapshot();
    });
  });
});
