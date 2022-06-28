import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Members:`, () => {
  let project: ProjectReflection;
  let membersPartial: Handlebars.TemplateDelegate;
  let memberPartial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    project = await global.bootstrap(['members.ts']);

    global.stubPartials(['member', 'index', 'member.sources']);
    global.stubHelpers(['relativeURL']);
    membersPartial = global.getPartial('members');
    memberPartial = global.getPartial('member');
  });

  describe(`(members)`, () => {
    test(`should compile module members'`, () => {
      expect(
        global.compileTemplate(
          membersPartial,
          global.findModule(project, 'members'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile class members'`, () => {
      expect(
        global.compileTemplate(
          membersPartial,
          project.getChildByName('ClassWithAccessorMembers'),
        ),
      ).toMatchSnapshot();
    });
  });

  describe(`(member)`, () => {
    test(`should compile declaration members'`, () => {
      expect(
        global.compileTemplate(
          memberPartial,
          project.getChildByName('declarationMember'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile a signature members'`, () => {
      expect(
        global.compileTemplate(
          memberPartial,
          project.getChildByName('signatureMember'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with getter'`, () => {
      expect(
        global.compileTemplate(
          memberPartial,
          (
            project.getChildByName('ClassWithAccessorMembers') as any
          ).getChildByName('getter'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with setter'`, () => {
      expect(
        global.compileTemplate(
          memberPartial,
          (
            project.getChildByName('ClassWithAccessorMembers') as any
          ).getChildByName('setter'),
        ),
      ).toMatchSnapshot();
    });
  });

  describe(`(with hideMembersSymbol)`, () => {
    let project: ProjectReflection;
    beforeAll(async () => {
      project = await global.bootstrap(['members.ts'], {
        hideMembersSymbol: true,
      });
      global.stubPartials(['member', 'member.sources']);

      memberPartial = global.getPartial('member');
    });

    test(`should compile members without special symbols`, () => {
      expect(
        global.compileTemplate(
          memberPartial,
          project.getChildByName('signatureMember'),
        ),
      ).toMatchSnapshot();
    });
  });
});
