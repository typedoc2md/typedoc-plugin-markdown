import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Members:`, () => {
  let testApp: TestApp;
  let membersPartial: Handlebars.TemplateDelegate;
  let memberPartial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    testApp = new TestApp(['members.ts']);
    await testApp.bootstrap();

    TestApp.stubPartials(['member', 'index', 'member.sources']);
    TestApp.stubHelpers(['relativeURL']);
    membersPartial = TestApp.getPartial('members');
    memberPartial = TestApp.getPartial('member');
  });

  describe(`(members)`, () => {
    test(`should compile module members'`, () => {
      expect(
        TestApp.compileTemplate(membersPartial, testApp.findModule('members')),
      ).toMatchSnapshot();
    });

    test(`should compile class members'`, () => {
      expect(
        TestApp.compileTemplate(
          membersPartial,
          testApp.findReflection('ClassWithAccessorMembers'),
        ),
      ).toMatchSnapshot();
    });
  });

  describe(`(member)`, () => {
    test(`should compile declaration members'`, () => {
      expect(
        TestApp.compileTemplate(
          memberPartial,
          testApp.findReflection('declarationMember'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile a signature members'`, () => {
      expect(
        TestApp.compileTemplate(
          memberPartial,
          testApp.findReflection('signatureMember'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile reference members'`, () => {
      expect(
        TestApp.compileTemplate(
          memberPartial,
          testApp.findReflection('ReferenceMember'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with getter'`, () => {
      expect(
        TestApp.compileTemplate(
          memberPartial,
          testApp
            .findReflection('ClassWithAccessorMembers')
            .findReflectionByName('getter'),
        ),
      ).toMatchSnapshot();
    });

    test(`should compile members with setter'`, () => {
      expect(
        TestApp.compileTemplate(
          memberPartial,
          testApp
            .findReflection('ClassWithAccessorMembers')
            .findReflectionByName('setter'),
        ),
      ).toMatchSnapshot();
    });
  });
});
