import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme';

describe(`Groups:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  const baseOptions = {
    hideKindPrefix: true,
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
      ({ project, context } = await global.bootstrap(['groups.ts'], {
        options: {
          ...baseOptions,
          excludeGroups: false,
        },
        stubPartials: stubbedPartials,
      }));
    });
    test(`should render group members'`, () => {
      expect(context.members(project, 2)).toMatchSnapshot();
    });

    test(`should render group TOC'`, () => {
      expect(context.memberTOC(project, 2)).toMatchSnapshot();
    });
  });

  describe(`(excludeGroups=true)`, () => {
    beforeAll(async () => {
      ({ project, context } = await global.bootstrap(['groups.ts'], {
        options: {
          ...baseOptions,
          excludeGroups: true,
        },
        stubPartials: stubbedPartials,
      }));
    });
    test(`should render group members'`, () => {
      expect(context.members(project, 2)).toMatchSnapshot();
    });

    test(`should render group TOC'`, () => {
      expect(context.memberTOC(project, 2)).toMatchSnapshot();
    });
  });
});
