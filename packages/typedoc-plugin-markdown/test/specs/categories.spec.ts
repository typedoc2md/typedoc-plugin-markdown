import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-render-context';

describe(`Categories:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  const baseOptions = {
    hideKindTag: true,
    disableSources: true,
    outputFileStrategy: 'modules',
  };

  const stubbedPartials = [
    'declarationMember',
    'reflectionMember',
    'signatureMember',
  ];

  describe(`(excludeGroups=false)`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['categories.ts'], {
        options: {
          ...baseOptions,
          excludeGroups: false,
        },
        stubPartials: stubbedPartials,
      }));
    });

    test(`should render category members'`, () => {
      expect(context.partials.members(project, 2)).toMatchSnapshot();
    });

    test(`should render category TOC'`, () => {
      expect(context.partials.memberIndex(project, 2)).toMatchSnapshot();
    });
  });

  describe(`(excludeGroups=true)`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['categories.ts'], {
        options: {
          ...baseOptions,
          excludeGroups: true,
        },
        stubPartials: stubbedPartials,
      }));
    });

    test(`should render category members'`, () => {
      expect(context.partials.members(project, 2)).toMatchSnapshot();
    });

    test(`should render category TOC'`, () => {
      expect(context.partials.memberIndex(project, 2)).toMatchSnapshot();
    });
  });

  describe(`(categorizeByGroup=false)`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['categories.ts'], {
        options: {
          ...baseOptions,
          categorizeByGroup: false,
        },
        stubPartials: stubbedPartials,
      }));
    });

    test(`should render category members'`, () => {
      expect(context.partials.members(project, 2)).toMatchSnapshot();
    });

    test(`should render category TOC'`, () => {
      expect(context.partials.memberIndex(project, 2)).toMatchSnapshot();
    });
  });
});
