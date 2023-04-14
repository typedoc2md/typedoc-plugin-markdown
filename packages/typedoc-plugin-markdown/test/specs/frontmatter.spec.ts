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
    test(`should render YAML block with options'`, async () => {
      ({ project, context } = await global.bootstrap(['comments.ts'], {
        options: {
          frontmatterTags: ['author', 'description', 'navOrder'],
          frontmatterGlobals: { globalA: 'globalA', globalB: 2, globalC: null },
        },
      }));
      expect(
        context.partials.frontmatter({
          project: project,
          model: project,
        } as any),
      ).toMatchSnapshot();
    });
  });

  test(`should render YAML block with snakeCase'`, async () => {
    ({ project, context } = await global.bootstrap(['comments.ts'], {
      options: {
        frontmatterTags: ['navOrder'],
        frontmatterNamingConvention: 'snakeCase',
      },
    }));
    expect(
      context.partials.frontmatter({
        project: project,
        model: project,
      } as any),
    ).toMatchSnapshot();
  });

  test(`should render YAML block with pascalCase'`, async () => {
    ({ project, context } = await global.bootstrap(['comments.ts'], {
      options: {
        frontmatterTags: ['navOrder'],
        frontmatterNamingConvention: 'pascalCase',
      },
    }));
    expect(
      context.partials.frontmatter({
        project: project,
        model: project,
      } as any),
    ).toMatchSnapshot();
  });
});
