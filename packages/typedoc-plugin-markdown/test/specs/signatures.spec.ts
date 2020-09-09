import * as Handlebars from 'handlebars';
import { SignatureReflection } from 'typedoc';

import { TestApp } from '../test-app';

describe(`Signatures:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(() => {
    testApp = new TestApp(['signatures.ts']);
    testApp.bootstrap();
    TestApp.stubPartials(['comment', 'member.sources']);
    partial = TestApp.getPartial('member.signature');
  });

  test(`should compile callable signature'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('CallableSignature').signatures[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithParameters')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with rest params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithRest')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with optional params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithOptionalParam')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with union types'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithUnionTypes')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with default values'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithUnionTypes')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
