import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-render-context';

describe(`Members:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['members.ts'], {
      stubPartials: ['member', 'index', 'member.sources'],
    }));
  });

  describe(`(members)`, () => {
    test(`should compile class members'`, () => {
      expect(
        context.partials.members(
          project.getChildByName('ClassWithAccessorMembers') as any,
        ),
      ).toMatchSnapshot();
    });
  });

  describe(`(member)`, () => {
    test(`should compile declaration members'`, () => {
      expect(
        context.partials.member(
          project.getChildByName('declarationMember') as any,
        ),
      ).toMatchSnapshot();
    });

    test(`should compile a signature members'`, () => {
      expect(
        context.partials.member(
          project.getChildByName('signatureMember') as any,
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with getter'`, () => {
      expect(
        context.partials.member(
          (
            project.getChildByName('ClassWithAccessorMembers') as any
          ).getChildByName('getter'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with setter'`, () => {
      expect(
        context.partials.member(
          (
            project.getChildByName('ClassWithAccessorMembers') as any
          ).getChildByName('setter'),
        ),
      ).toMatchSnapshot();
    });
  });
});
